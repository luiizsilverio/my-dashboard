import { useState } from 'react'

import * as S from './styles'

interface Props {
  labelLeft: string
  labelRight: string
  checked: boolean
  onChange(): void
}

const Toggle = (props: Props) => {
  return (
    <S.Container>
      <S.ToggleLabel>{ props.labelLeft }</S.ToggleLabel>
      <S.MySwitch 
        onChange={ props.onChange } 
        checked={ props.checked }
        checkedIcon={false}
        uncheckedIcon={false}           
      />
      <S.ToggleLabel>{ props.labelRight }</S.ToggleLabel>
    </S.Container>
  )
}

export default Toggle