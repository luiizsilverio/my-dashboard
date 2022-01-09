import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from 'react-icons/md'

import * as S from './styles'
import logoImg from '../../assets/logo.svg'
import { useAuth } from '../../hooks/auth'

const Aside = () => {
  const { signOut } = useAuth()

  return (
    <S.Container menuOpen={true}>
      <S.Header>
        <a href="/">
          <S.Logo src={logoImg} alt="Logotipo My-Dashboard" />
          <S.Title>My Dashboard</S.Title>
        </a>
      </S.Header>

      <S.MenuContainer>
        <S.MenuLink href="/">
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
        <S.MenuItemButton onClick={ signOut }>
          <MdExitToApp />
          Sair
        </S.MenuItemButton>
      </S.MenuContainer>
    </S.Container>
  )
}

export default Aside