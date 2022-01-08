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

  @media(max-width: 1100px) {
    height: 220px;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  h2 {
    margin-bottom: 15px;
  }

  @media(max-width: 1100px) {
    flex-direction: column;
    align-items: center;
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
    width: 60px;
    height: 36px;
    border-radius: 6px;
    font-size: 16px;
    line-height: 36px;
    text-align: center;
  }

  > span {
    margin-left: 6px;
  }

  @media(max-width: 1100px) {
    > div {
      width: 50px;
      height: 28px;
      font-size: 14px;
      line-height: 28px;
      margin-left: 8px;      
    }
  }

  @media(max-width: 600px) {
    font-size: 14px;
  }
`;
