import { useState } from 'react'
import { 
  MdDashboard, 
  MdArrowDownward, 
  MdArrowUpward, 
  MdExitToApp,
  MdMenu,
  MdClose 
} from 'react-icons/md'

import * as S from './styles'
import logoImg from '../../assets/logo.svg'
import { useAuth } from '../../hooks/auth'
import { useTheme } from '../../hooks/theme'
import Toggle from '../Toggle'

const Aside = () => {
  const { signOut } = useAuth()
  const { toggleTheme, theme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false)
  
  function handleChangeTheme() {
    setDarkTheme((prev) => !prev)
    toggleTheme()
  }

  function handleToggleMenu() {
    setMenuOpen((prev) => !prev)
  }

  return (
    <S.Container menuOpen={ menuOpen }>
      <S.Header>
        <S.ToggleMenu 
          onClick={ handleToggleMenu }
        >
          {
            menuOpen ? <MdClose /> : <MdMenu />
          }
        </S.ToggleMenu>
        <S.Logo 
          src={ logoImg } 
          alt="Logotipo My-Dashboard" 
        />
        <S.Title>My Dashboard</S.Title>
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

      <S.Footer menuOpen={ menuOpen }>
        <Toggle 
          labelLeft='Light'
          labelRight='Dark'
          checked={ darkTheme }
          onChange={handleChangeTheme}
        />
      </S.Footer>
    </S.Container>
  )
}

export default Aside