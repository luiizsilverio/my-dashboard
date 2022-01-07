import { InputHTMLAttributes } from 'react'
import * as S from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const InputBox = ({ ...rest }: InputProps) => {
  return (
    <S.Container {...rest} />      
  )
}

export default InputBox
