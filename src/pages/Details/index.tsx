import * as S from './styles'

import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import DetailCard from '../../components/DetailCard'

const Details = () => {
  const options = [
    { value: 0, label: 'Laranja' },
    { value: 1, label: 'Pera' },
    { value: 2, label: 'Maçã' },
  ]

  return (
    <S.Container>
      <ContentHeader
        title="Saídas"
        lineColor='#e44c4e'
      >
        <SelectInput options={options} />
      </ContentHeader>     

      <S.Content>
        <DetailCard 
          cardColor='#313862'
          tagColor='#e44c4e'
          title='Conta de luiz'
          subtitle='27/11/2021'
          amount='R$ 130,00'
        />
      </S.Content>
    </S.Container>
  )
}

export default Details
