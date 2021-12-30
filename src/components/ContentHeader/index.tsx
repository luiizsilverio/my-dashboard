import { ReactNode } from 'react'
import * as S from './styles'

interface Props {
  title: string;
  lineColor: string;
  children?: ReactNode
}

const ContentHeader = ({ title, lineColor, children }: Props) => {

  return (
    <S.Container>
      <S.TitleContainer lineColor={lineColor}>
        <h1>{ title }</h1>
      </S.TitleContainer>
      <S.Controllers>
        { children }
      </S.Controllers>
    </S.Container>
  )
}

export default ContentHeader