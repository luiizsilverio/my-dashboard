import { useState } from 'react'

import * as S from './styles'
import logoImg from '../../assets/logo.svg'
import { useAuth } from '../../hooks/auth'
import InputBox from '../../components/InputBox'
import Button from '../../components/Button'

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { signIn } = useAuth()

  return (
    <S.Container>
      <S.Logo>
        <img src={logoImg} alt="My Dashboard" />
        <h2>My Dashboard</h2>
      </S.Logo>

      <S.Form onSubmit={() => signIn(email, password)}>
        <S.FormTitle>Entrar</S.FormTitle>
        <InputBox 
          type="email" 
          placeholder='E-mail'
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputBox 
          type="password" 
          placeholder='Senha: 123'
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Acessar</Button>
      </S.Form>
    </S.Container>
  )
}

export default SignIn
