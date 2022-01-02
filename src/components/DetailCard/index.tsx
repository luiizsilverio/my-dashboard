import * as S from './styles'

type Props = {
  tagColor: string
  title: string
  subtitle: string
  amount: string
}

const DetailCard = (props: Props) => {
  return (
    <S.Container>
      <S.Tag color={props.tagColor} />
      <div>
        <span>{ props.title }</span>
        <small>{ props.subtitle }</small>
      </div>
      <h3>{ props.amount }</h3>
    </S.Container>
  )
}

export default DetailCard
