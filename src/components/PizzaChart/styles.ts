import styled from "styled-components";

export const Container = styled.div`
  width: 48%;
  height: 260px;
  margin: 10px 0;
  background-color: ${props => props.theme.colors.complementar};
  color: ${props => props.theme.colors.white};
  border-radius: 6px;
  display: flex;
`;

export const SideLeft = styled.aside`
  padding: 30px 20px;

  > h2 {
    margin-bottom: 20px;
  }
`;

export const LegendContainer = styled.ul`
  list-style: none;
  height: 170px;
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
    width: 42px;
    height: 42px;
    border-radius: 6px;
    font-size: 17px;
    line-height: 42px;
    text-align: center;
  }

  > span {
    margin-left: 6px;
  }
`;

export const Main = styled.main`
`;

export const ResponsiveContainer = styled.div`
`;