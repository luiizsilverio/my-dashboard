import { useMemo, useState, useCallback } from 'react'

import * as S from './styles'
import gains from '../../utils/gains'
import expenses from '../../utils/expenses'
import formatDate from '../../utils/formatDate'
import months from '../../utils/months'
import happyImg from '../../assets/happy.svg'
import sadImg from '../../assets/sad.svg'
import grinImg from '../../assets/grinning.svg'
import opsImg from '../../assets/ops.svg'

import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import TotalCard from '../../components/TotalCard'
import MessageBox from '../../components/MessageBox'
import PizzaChart from '../../components/PizzaChart'
import HistoryBox from '../../components/HistoryBox'
import BarChartBox from '../../components/BarChartBox'

interface IMovimentacao {
  total: number
  dataUlt: Date | null
  formattedDate: string
}

interface ILista {
  label: string | number;
  value: string | number;
}

const Dashboard = () => {
  const hoje = new Date()
  const [monthSel, setMonthSel] = useState(hoje.getMonth() + 1)
  const [yearSel, setYearSel] = useState(hoje.getFullYear())

  const years: ILista[] = useMemo(() => {
    const uniqueYears: number[] = []
    const lstMov = [...expenses, ...gains]

    lstMov.forEach(item => {
      const date = new Date(item.date)
      const year = date.getFullYear()
      
      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year)
      }
    })

    let lista: ILista[] = []
    uniqueYears.forEach(year => {
      lista.push({
        value: year, 
        label: year.toString()
      })
    })
    
    return lista
  }, [])


  const saidas: IMovimentacao = useMemo(() => {
    let movim: IMovimentacao = { total: 0, dataUlt: null, formattedDate: "" }

    expenses.forEach(item => {
      const date = new Date(item.date)
      const year = date.getFullYear()
      const month = date.getMonth() + 1

      if (month === monthSel && year === yearSel) {
        const value = parseFloat(item.amount)
        if (!isNaN(value)) {
          movim.total += value
        }
      }

      if (!movim.dataUlt || date > movim.dataUlt) {
        movim.dataUlt = date
        movim.formattedDate = formatDate(item.date)
      }
    })
    return movim
  }, [monthSel, yearSel])


  const entradas: IMovimentacao = useMemo(() => {
    let movim: IMovimentacao = { total: 0, dataUlt: null, formattedDate: "" }

    gains.forEach(item => {
      const date = new Date(item.date)
      const year = date.getFullYear()
      const month = date.getMonth() + 1

      if (month === monthSel && year === yearSel) {
        const value = parseFloat(item.amount)
        if (!isNaN(value)) {
          movim.total += value
        }
      }

      if (!movim.dataUlt || date > movim.dataUlt) {
        movim.dataUlt = date
        movim.formattedDate = formatDate(item.date)
      }
    })
    return movim
  }, [monthSel, yearSel])


  const saldo = useMemo(() => {
    return entradas.total - saidas.total
  }, [entradas, saidas])


  const historyData = useMemo(() => {
    return months.map((_, month) => {
      let totEntradas = 0
      gains.forEach(item => {
        const date = new Date(item.date)
        const mes = date.getMonth()
        const ano = date.getFullYear()

        if (mes === month && ano === yearSel) {
          const value = parseFloat(item.amount)
          if (!isNaN(value)) {
            totEntradas += value
          }
        }
      })

      let totSaidas = 0
      expenses.forEach(item => {
        const date = new Date(item.date)
        const mes = date.getMonth()
        const ano = date.getFullYear()

        if (mes === month && ano === yearSel) {
          const value = parseFloat(item.amount)
          if (!isNaN(value)) {
            totSaidas += value
          }
        }
      })

      return {
        monthNo: month,
        month: months[month].label.substring(0, 3),
        totEntradas: parseFloat(totEntradas.toFixed(2)),
        totSaidas: parseFloat(totSaidas.toFixed(2))
      }
    })
    // .filter(item => {
    //   const mesAtual = new Date().getMonth()
    //   const anoAtual = new Date().getFullYear()
    //   return (yearSel !== anoAtual || item.monthNo <= mesAtual)
    // })
  }, [yearSel])


  const saidasPorFrequencia = useMemo(() => {
    let totRecorrente = 0
    let totEventual = 0

    expenses
    .filter((item) => {
      const date = new Date(item.date)
      const year = date.getFullYear()
      const month = date.getMonth() + 1

      return month === monthSel && year === yearSel
    })
    .forEach(item => {
      const value = parseFloat(item.amount)
      if (item.frequency === 'recorrente' && !isNaN(value)) {
        return totRecorrente += value
      }

      if (item.frequency === 'eventual' && !isNaN(value)) {
        return totEventual += value
      }
    })
    
    const total = totRecorrente + totEventual
    const perc_R = total === 0 ? 0 : (totRecorrente / total * 100);
    const perc_E = total === 0 ? 0 : (totEventual / total * 100);

    return [
      {
        name: 'Recorrentes',
        amount: totRecorrente,
        percent: parseFloat(perc_R.toFixed(1)),
        color: '#f7931b'
      },
      {
        name: 'Eventuais',
        amount: totEventual,
        percent: parseFloat(perc_E.toFixed(1)),
        color: '#e44c4e'
      }
    ]
    
  }, [yearSel, monthSel])


  const entradasPorFrequencia = useMemo(() => {
    let totRecorrente = 0
    let totEventual = 0

    gains
    .filter((item) => {
      const date = new Date(item.date)
      const year = date.getFullYear()
      const month = date.getMonth() + 1

      return month === monthSel && year === yearSel
    })
    .forEach(item => {
      const value = parseFloat(item.amount)
      if (item.frequency === 'recorrente' && !isNaN(value)) {
        return totRecorrente += value
      }

      if (item.frequency === 'eventual' && !isNaN(value)) {
        return totEventual += value
      }
    })
    
    const total = totRecorrente + totEventual
    const perc_R = total === 0 ? 0 : (totRecorrente / total * 100);
    const perc_E = total === 0 ? 0 : (totEventual / total * 100);

    return [
      {
        name: 'Recorrentes',
        amount: totRecorrente,
        percent: parseFloat(perc_R.toFixed(1)),
        color: '#f7931b'
      },
      {
        name: 'Eventuais',
        amount: totEventual,
        percent: parseFloat(perc_E.toFixed(1)),
        color: '#e44c4e'
      }
    ]
    
  }, [yearSel, monthSel])


  const message = useMemo(() => {
    if (saldo < 0) {
      return {
        title: "Que triste!",
        description: "Neste mês, você gastou mais do que deveria.",
        footer: "Contenha seus gastos, corte o supérfluo.",
        icon: sadImg
      }
    } 
    else if (entradas.total === 0 && saidas.total === 0) {
      return {
        title: "Ops!",
        description: "Neste mês não há nenhum movimento de entrada ou saída.",
        footer: "Parece que você ficou offline esse mês",
        icon: opsImg
      }
    }
    else if (saldo === 0) {
      return {
        title: "Ufaa!",
        description: "Neste mês, você atingiu o teto de gastos.",
        footer: "Cuidado, contenha os gastos.",
        icon: grinImg
      }
    }
    else {
      return {
        title: "Muito bem!",
        description: "Você está no lucro.",
        footer: "Continue assim. Considere investir o seu saldo.",
        icon: happyImg
      }
    }
  }, [saldo, entradas.total, saidas.total])


  const resultado = useMemo(() => {
    const total = entradas.total + saidas.total
    const p_ent = total === 0 ? 0 : entradas.total / total * 100
    const p_sai = total === 0 ? 0 : 100 - p_ent

    const data = [
      {
        name: "Entradas",
        value: entradas.total,
        percent: p_ent,
        color: "#E44C4E"
      },
      {
        name: "Saídas",
        value: saidas.total,
        percent: p_sai,
        color: "#f7931b"
      }
    ]

    return data;
  }, [entradas, saidas])


  const handleMonth = useCallback((month: string) => {
    const mes = parseInt(month)
    if (!isNaN(mes)) {
      setMonthSel(mes)
    } else {
      throw new Error('Mês inválido');
    }
  }, [])

  const handleYear = useCallback((year: string) => {
    const ano = parseInt(year)
    if (!isNaN(ano)) {
      setYearSel(ano)
    } else {
      throw new Error('Ano inválido');
    }
  }, [])
  
  return (
    <S.Container>
      <ContentHeader
        title="Dashboard"
        lineColor='#f7931b'
      >       
        <SelectInput 
          options={ months } 
          defaultValue={ monthSel }
          onChange={(e) => handleMonth(e.target.value)}
        />
        <SelectInput 
          options={ years } 
          defaultValue={ yearSel }
          onChange={(e) => handleYear(e.target.value)}
        />
      </ContentHeader>     

      <S.Content>
        <TotalCard 
          title='saldo'
          amount={ saldo }
          footer='atualizado com base nas entradas e saídas'
          icon='dolar'
          color='#4e41f0'
        />

        <TotalCard 
          title='entradas'
          amount={ entradas.total }
          footer={`última movimentação em ${ entradas.formattedDate }`}
          icon='arrowUp'
          color='#f7931b'
        />

        <TotalCard 
          title='saídas'
          amount={ saidas.total }
          footer={`última movimentação em ${ saidas.formattedDate }`}
          icon='arrowDown'
          color='#e44c4e'
        />

        <MessageBox 
          title={ message.title }
          description={ message.description }
          footer={ message.footer }
          icon={ message.icon }
        />

        <PizzaChart 
          title={ monthSel > 0 ? `${months[monthSel -1].label} de ${yearSel}` : "" }
          data={ resultado }
        />

        <BarChartBox 
          title='Saídas' 
          data={saidasPorFrequencia} 
        />

        <BarChartBox 
          title='Entradas' 
          data={entradasPorFrequencia} 
        />

        <HistoryBox 
          data={ historyData } 
          lineColorEnt='#f7931b'
          lineColorSai='#e44c4e'
        />

      </S.Content>
    </S.Container>
  )
}

export default Dashboard
