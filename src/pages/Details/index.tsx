import { useMemo, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import * as S from './styles'
import gains from '../../utils/gains'
import expenses from '../../utils/expenses'
import formatValue from '../../utils/formatValue'
import formatDate from '../../utils/formatDate'
import months from '../../utils/months'

import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import DetailCard from '../../components/DetailCard'

interface ILista {
  label: string | number;
  value: string | number;
}

interface IData {
  id: string
  description: string
  amountFormatted: string
  frequency: string
  dateFormatted: string
  tagColor: string
}

const Details = () => {
  const [data, setData] = useState<IData[]>([])
  const hoje = new Date()
  const [monthSel, setMonthSel] = useState(hoje.getMonth() + 1)
  const [yearSel, setYearSel] = useState(hoje.getFullYear())
  const [frequency, setFrequency] = useState({recorrente: true, eventual: true})
  const { type } = useParams()  
  
  const title = useMemo(() => (
    type === "entradas"
      ? { caption: "Entradas", lineColor: '#4e41f0' }
      : { caption: "Saídas", lineColor:  '#e44c4e' }
  ), [type])

  const listData = useMemo(() => (
    type === "entradas" ? gains : expenses
  ), [type])

  const years: ILista[] = useMemo(() => {
    const uniqueYears: number[] = []
    
    listData.forEach(item => {
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
  }, [listData])


  function handleFrequency(selFreq: string) {
    if (selFreq === 'recorrente') {
      setFrequency({
        recorrente: !frequency.recorrente, 
        eventual: frequency.eventual
      })
    } else {
      setFrequency({
        recorrente: frequency.recorrente, 
        eventual: !frequency.eventual
      })
    }    
  }


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
  

  useEffect(() => {
    const response = listData.filter(item => {
      const date = new Date(item.date)
      const month = date.getMonth() + 1
      const year = date.getFullYear()
      let frequencyOK
      
      if (item.frequency === 'recorrente') {
        frequencyOK = frequency.recorrente
      } else {
        frequencyOK = frequency.eventual
      }

      return frequencyOK && month === monthSel && year === yearSel
    })
    
    const lista = response.map((item, index) => ({
      id: index.toString(),
      description: item.description,
      amountFormatted: formatValue(parseFloat(item.amount)),
      frequency: item.frequency,
      dateFormatted: formatDate(item.date),
      tagColor: item.frequency === 'recorrente' ? '#4e41f0' : '#e44c4e'
    }))

    setData(lista)

  }, [listData, monthSel, yearSel, frequency])


  return (
    <S.Container>
      <ContentHeader
        title={ title.caption }
        lineColor={ title.lineColor }
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

      <S.Filters>
        <button type="button" 
          className={`tag-filter tag-recorrente ${frequency.recorrente || "tag-inativo"}`}
          onClick={() => handleFrequency('recorrente')}
        >
          Recorrentes
        </button>
        <button type="button" 
          className={`tag-filter tag-eventual ${frequency.eventual || "tag-inativo"}`}
          onClick={() => handleFrequency('eventual')}
        >
          Eventuais
        </button>
      </S.Filters>

      <S.Content>
        {
          data.map((item, index) => (
            <DetailCard 
              key={ item.id }              
              tagColor={ item.tagColor }
              title={ item.description }
              subtitle={ item.dateFormatted }
              amount={ item.amountFormatted }
            />
          ))
        }        
      </S.Content>
    </S.Container>
  )
}

export default Details
