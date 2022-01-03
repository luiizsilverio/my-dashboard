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
        <S.MenuLink href="/dashboard">
          <MdDashboard />
          Dashboard
        </S.MenuLink>
        <S.MenuLink href="/list/entradas">
          <MdArrowUpward />
          Entradas
        </S.MenuLink>
        <S.MenuLink href="/list/saidas">
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