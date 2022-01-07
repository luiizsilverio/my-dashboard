import * as S from './styles'
import logoImg from '../../assets/logo.svg'
import InputBox from '../../components/InputBox'

const SignIn = () => {
  return (
    <S.Container>
      <S.Logo>
        <img src={logoImg} alt="My Dashboard" />
        <h2>My Dashboard</h2>
      </S.Logo>

      <S.Form onSubmit={() => {}}>
        <S.FormTitle>Entrar</S.FormTitle>
        <InputBox 
          type="email" 
          placeholder='E-mail'
          required
        />
        <InputBox 
          type="password" 
          placeholder='Senha'
          required
        />
        <button type="submit">Acessar</button>
      </S.Form>
    </S.Container>
  )
}

export default SignIn
