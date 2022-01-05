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
          amount={150.00}
          footer='atualizado com base nas entradas e saídas'
          icon='dolar'
          color='#4e41f0'
        />

        <TotalCard 
          title='entradas'
          amount={5000.00}
          footer='última movimentação em'
          icon='arrowUp'
          color='#f7931b'
        />

        <TotalCard 
          title='saídas'
          amount={150.00}
          footer='última movimentação em'
          icon='arrowDown'
          color='#e44c4e'
        />
      </S.Content>
    </S.Container>
  )
}

export default Dashboard
