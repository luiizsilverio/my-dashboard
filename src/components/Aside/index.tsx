import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from 'react-icons/md'

import * as S from './styles'
import logoImg from '../../assets/logo.svg'

const Aside = () => {
  return (
    <S.Container>
      <S.Header>
          <S.Logo src={logoImg} alt="Logotipo My-Dashboard" />
          <S.Title>My Dashboard</S.Title>
      </S.Header>

      <S.MenuContainer>
        <S.MenuLink href="#">
          <MdDashboard />
          Dashboard
        </S.MenuLink>
        <S.MenuLink href="#">
          <MdArrowUpward />
          Entradas
        </S.MenuLink>
        <S.MenuLink href="#">
          <MdArrowDownward />
          Saídas
        </S.MenuLink>
        <S.MenuLink href="#">
          <MdExitToApp />
          Sair
        </S.MenuLink>
      </S.MenuContainer>
    </S.Container>
  )
}

export default Aside