import { useMemo } from 'react'
import * as S from './styles'

import emojis from '../../utils/emojis'
import Toggle from '../Toggle'

const MainHeader = () => {
  const emoji = useMemo(() => {
    const i = Math.floor(Math.random() * emojis.length)
    return emojis[i]
  }, [])

  return (
    <S.Container>
      <Toggle />
      <S.Profile>
        <S.Welcome>Olá, { emoji }</S.Welcome>
        <S.UserName>Luiiz Oliveira</S.UserName>
      </S.Profile>
    </S.Container>
  )
}

export default MainHeader