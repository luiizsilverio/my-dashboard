import styled, {keyframes} from "styled-components";

const animacao = keyframes`
	from {
		opacity: 0;
		transform: translateY(10px) scale(.7);

	}
	to {
		opacity: 1;
    transform: translateY(0) scale(1);
	}
`

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  animation: ${ animacao } .5s;

  > h2 {
    color: ${props => props.theme.colors.white};
    margin-left: 8px;
  }

  > img {
    width: 40px;
    height: 40px;
  }
`;

export const Form = styled.form`
  width: 300px;
  height: 300px;
  padding: 30px;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.complementar};

  animation: ${ animacao } .5s;
`;

export const FormTitle = styled.h1`
  color: ${props => props.theme.colors.white};
  margin-bottom: 40px;

  &:after {
    content: "";
    display: block;
    width: 55px;
    border-bottom: 5px solid ${props => props.theme.colors.warning};
  }
`;
