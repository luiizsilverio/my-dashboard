import styled, { keyframes } from "styled-components";

const animacao = keyframes`
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  50% {
    opacity: .5;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 48%;
  height: 260px;
  background-color: ${props => props.theme.colors.complementar};
  color: ${props => props.theme.colors.white};
  border-radius: 8px;
  margin: 10px 0;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  animation: ${ animacao } .5s;

  > header {    
    img {
      width: 35px;
      margin-left: 6px;
    }

    p {
      font-size: 18px;
    }

    h1 {
      font-size: 30px;
      font-weight: 700;
    }
  }

  @media(max-width: 770px) {
    width: 100%;
    height: auto;

    > header h1 {
      font-size: 24px;

      img {
        height: 20px;
        width: 20px;
      }
    }

    > header p {
      margin-bottom: 15px;
    }

    > header h1, > footer span {
      font-size: 14px;
    }
  }

  
`;
