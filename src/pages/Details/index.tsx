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
  const { type } = useParams()  
  
  const title = useMemo(() => (
    type === "entradas"
      ? { caption: "Entradas", lineColor: '#4e41f0' }
      : { caption: "Saídas", lineColor:  '#e44c4e' }
  ), [type])

  const listData = useMemo(() => (
    type === "entradas" ? gains : expenses
  ), [type])

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

  const years = []
  const anoAtual = new Date().getFullYear()

  for (let i = 1; i <= 5; i++) {
    const ano = anoAtual - i + 1;
    years.push({value: ano, label: ano})
  }    


  useEffect(() => {
    const response = listData.map((item, index) => ({
      id: index.toString(),
      description: item.description,
      amountFormatted: formatValue(parseFloat(item.amount)),
      frequency: item.frequency,
      dateFormatted: formatDate(item.date),
      tagColor: item.frequency === 'recorrente' ? '#4e41f0' : '#e44c4e'
    }))

    setData(response)
  }, [])

  return (
    <S.Container>
      <ContentHeader
        title={ title.caption }
        lineColor={ title.lineColor }
      >
        <SelectInput options={ months } />
        <SelectInput options={ years } />
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
