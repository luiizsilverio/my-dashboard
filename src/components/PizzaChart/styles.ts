import styled, {keyframes} from "styled-components";

const animacao = keyframes`
  0% {
    transform: translateX(100px);
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
  margin: 10px 0;
  background-color: ${props => props.theme.colors.complementar};
  color: ${props => props.theme.colors.white};
  border-radius: 6px;
  display: flex;

  animation: ${ animacao } .5s;
  
  @media(max-width: 770px) {
    display: flex;
    width: 100%;
  }  
`;

export const SideLeft = styled.aside`
  padding: 30px 10px 30px 20px;  

  > h2 {
    margin-bottom: 20px;
  }

  @media(max-width: 770px) {
    padding: 20px 5px 20px 20px;
  }
`;

export const LegendContainer = styled.ul`
  list-style: none;
  height: 150px;
  padding-right: 15px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.secundary};
    border-radius: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${props => props.theme.colors.complementar};
  }
`;

interface ILegendProps {
  color: string
}

export const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  
  > div {
    background-color: ${props => props.color};
    width: 54px;
    height: 36px;
    border-radius: 6px;
    font-size: 16px;
    line-height: 36px;
    text-align: center;
  }

  > span {
    margin-left: 6px;
  }
`;

export const Main = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;
`;
