import { ReactNode } from 'react'
import * as S from './styles'

import MainHeader from '../MainHeader'
import Aside from '../Aside'
import Content from '../Content'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <S.Grid>
      <MainHeader />
      <Aside />
      <Content>
        { children }
      </Content>
    </S.Grid>
  )
}

export default Layout