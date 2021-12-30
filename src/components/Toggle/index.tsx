import { useState } from 'react'

import * as S from './styles'

const Toggle = () => {
  const [ativo, setAtivo] = useState(false)

  return (
    <S.Container>
      <S.ToggleLabel>Light</S.ToggleLabel>
      <S.MySwitch 
        onChange={(v) => setAtivo(v)} 
        checked={ativo}
        checkedIcon={false}
        uncheckedIcon={false}      
      />
      <S.ToggleLabel>Dark</S.ToggleLabel>
    </S.Container>
  )
}

export default Toggle