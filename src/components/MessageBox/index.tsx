import * as S from './styles'

interface Props {
  title: string;
  description: string;
  footer: string;
  icon: string;
}

const MessageBox = (props: Props) => {
  return (
    <S.Container>
      <header>
        <h1>
          { props.title } 
          <img src={ props.icon } alt={ props.title } />
        </h1>
        <p>{ props.description }</p>
      </header>
      <footer>
        <span>{ props.footer }</span>
      </footer>
    </S.Container>
  )
}

export default MessageBox