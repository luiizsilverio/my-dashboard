import { useMemo, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import * as S from './styles'
import gains from '../../utils/gains'
import expenses from '../../utils/expenses'
import formatValue from '../../utils/formatValue'
import formatDate from '../../utils/formatDate'

import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import DetailCard from '../../components/DetailCard'

const years: {value: number, label: number}[] = []  

const months = [
  { value: 1, label: 'Janeiro' },
  { value: 2, label: 'Fevereiro' },
  { value: 3, label: 'Março' },
  { value: 4, label: 'Abril' },
  { value: 5, label: 'Maio' },
  { value: 6, label: 'Junho' },
  { value: 7, label: 'Julho' },
  { value: 8, label: 'Agosto' },
  { value: 9, label: 'Setembro' },
  { value: 10, label: 'Outubro' },
  { value: 11, label: 'Novembro' },
  { value: 12, label: 'Dezembro' },
]

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
  const [monthSel, setMonthSel] = useState(String(hoje.getMonth() + 1))
  const [yearSel, setYearSel] = useState(String(hoje.getFullYear()))
  const { type } = useParams()  
  
  const title = useMemo(() => (
    type === "entradas"
      ? { caption: "Entradas", lineColor: '#4e41f0' }
      : { caption: "Saídas", lineColor:  '#e44c4e' }
  ), [type])

  const listData = useMemo(() => (
    type === "entradas" ? gains : expenses
  ), [type])

  useEffect(() => {
    const response = listData.filter(item => {
      const date = new Date(item.date)
      const month = date.getMonth() + 1
      const year = date.getFullYear()

      return month === parseInt(monthSel) && year === parseInt(yearSel)
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
    
    const hoje = new Date()
    const anoAtual = hoje.getFullYear()

    // busca o menor ano da lista
    const ano1 = listData.reduce((acc, item) => {
      const vdata = new Date(item.date)
      return vdata.getFullYear() < anoAtual ? vdata.getFullYear() : acc
    }, anoAtual)    

    years.length = 0
    for (let ano = ano1; ano <= anoAtual; ano++) {
      years.push({value: ano, label: ano})
    }    

    years.reverse()
  }, [listData, monthSel, yearSel])

  return (
    <S.Container>
      <ContentHeader
        title={ title.caption }
        lineColor={ title.lineColor }
      >
        <SelectInput 
          options={ months } 
          defaultValue={ monthSel }
          onChange={(e) => setMonthSel(e.target.value)}
        />
        <SelectInput 
          options={ years } 
          defaultValue={ yearSel }
          onChange={(e) => setYearSel(e.target.value)}
        />
      </ContentHeader>     

      <S.Filters>
        <button type="button" className='tag-filter tag-recorrente'>Recorrentes</button>
        <button type="button" className='tag-filter tag-eventual'>Eventuais</button>
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
