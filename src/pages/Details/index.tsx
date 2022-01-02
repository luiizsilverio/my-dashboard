import * as S from './styles'

import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import DetailCard from '../../components/DetailCard'

const Details = () => {
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

  const cards = [
    { title: 'Conta de luz', subtitle: '27/11/2021', amount: 'R$ 130,00'},
    { title: 'Aluguel', subtitle: '27/11/2021', amount: 'R$ 1200,00'},
    { title: 'Refeição', subtitle: '27/11/2021', amount: 'R$ 38,00'},
    { title: 'Presente mãe', subtitle: '27/11/2021', amount: 'R$ 250,00'},
    { title: 'Presente tia', subtitle: '27/11/2021', amount: 'R$ 110,00'},
    { title: 'IPVA', subtitle: '27/11/2021', amount: 'R$ 600,00'},
    { title: 'Plano de saúde', subtitle: '27/11/2021', amount: 'R$ 380,00'},
    { title: 'remédio', subtitle: '27/11/2021', amount: 'R$ 55,00'}    
  ]

  return (
    <S.Container>
      <ContentHeader
        title="Saídas"
        lineColor='#e44c4e'
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
          cards.map((item, index) => (
            <DetailCard 
              key={item.title}              
              tagColor='#e44c4e'
              title={ item.title }
              subtitle={ item.subtitle }
              amount={ item.amount }
            />
          ))
        }        
      </S.Content>
    </S.Container>
  )
}

export default Details
