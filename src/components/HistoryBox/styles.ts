import styled from "styled-components";

export const Container = styled.div`  
  width: 100%;
  background-color: ${props => props.theme.colors.complementar};
  color: ${props => props.theme.colors.white};
  border-radius: 6px;
  margin: 10px 0;
  padding: 25px 20px;
`;

export const ChartContainer = styled.div`
  flex: 1;
  height: 260px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  h2 {
    margin-bottom: 15px;
  }
`;

export const LegendContainer = styled.ul`
  list-style: none;
  display: flex;
`;

interface ILegendProps {
  color: string
}

export const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  margin-left: 12px;
  
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
