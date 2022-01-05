import { useMemo, useState } from 'react'

import * as S from './styles'
import gains from '../../utils/gains'
import expenses from '../../utils/expenses'
import formatValue from '../../utils/formatValue'
import formatDate from '../../utils/formatDate'
import months from '../../utils/months'

import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import TotalCard from '../../components/TotalCard'
import MessageBox from '../../components/MessageBox'
import happyImg from '../../assets/happy.svg'
import sadImg from '../../assets/sad.svg'
import grinImg from '../../assets/grinning.svg'
import PizzaChart from '../../components/PizzaChart'

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
        const value = parseInt(item.amount)
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
        const value = parseInt(item.amount)
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


  const message = useMemo(() => {
    if (saldo < 0) {
      return {
        title: "Que triste!",
        description: "Neste mês, você gastou mais do que deveria.",
        footer: "Contenha seus gastos, corte o supérfluo.",
        icon: sadImg
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
  }, [saldo])


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


  function handleMonth(month: string) {
    const mes = parseInt(month)
    if (!isNaN(mes)) {
      setMonthSel(mes)
    } else {
      throw new Error('Mês inválido');
    }
  }

  function handleYear(year: string) {
    const ano = parseInt(year)
    if (!isNaN(ano)) {
      setYearSel(ano)
    } else {
      throw new Error('Ano inválido');
    }
  }
  
  
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
          data={ resultado }
        />
      </S.Content>
    </S.Container>
  )
}

export default Dashboard
