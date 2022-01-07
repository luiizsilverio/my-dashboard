import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <S.Container {...rest}> 
      { children }     
    </S.Container>
  )
}

export default Button
