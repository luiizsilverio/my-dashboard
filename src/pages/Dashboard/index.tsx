import * as S from './styles'

import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'

const Dashboard = () => {
  const options = [
    { value: 0, label: 'Laranja' },
    { value: 1, label: 'Pera' },
    { value: 2, label: 'Maçã' },
  ]

  return (
    <S.Container>
      <ContentHeader
        title="Dashboard"
        lineColor='#f7931b'
      >
        <SelectInput options={options} />
      </ContentHeader>      
    </S.Container>
  )
}

export default Dashboard
