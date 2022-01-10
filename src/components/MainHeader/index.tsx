import { useMemo, useState } from 'react'

import * as S from './styles'
import { useTheme } from '../../hooks/theme'

import emojis from '../../utils/emojis'
import Toggle from '../Toggle'

const MainHeader = () => {
  const { toggleTheme, theme } = useTheme()
  const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false)
  
  const emoji = useMemo(() => {
    const i = Math.floor(Math.random() * emojis.length)
    return emojis[i]
  }, [])

  function handleChangeTheme() {
    setDarkTheme((prev) => !prev)
    toggleTheme()
  }

  return (
    <S.Container>
      <Toggle 
        labelLeft='Light'
        labelRight='Dark'
        checked={ darkTheme }
        onChange={handleChangeTheme}
      />
      <S.Profile>
        <S.Welcome>Olá, { emoji }</S.Welcome>
        <S.UserName>Luiiz Oliveira</S.UserName>
      </S.Profile>
    </S.Container>
  )
}

export default MainHeader