import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  
  @media(max-width: 500px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }
`;

type TitleProps = {
  lineColor: string
}

export const TitleContainer = styled.div<TitleProps>`
  > h1 {
      color: ${props => props.theme.colors.white};

      &::after {
        content: '';
        display: block;
        width: 55px;
        /* border-bottom: 5px solid ${props => props.theme.colors.warning}; */
        border-bottom: 5px solid ${props => props.lineColor};
      }
    }

    @media(max-width: 500px) {
      margin-bottom: 15px;
    }    
`;

export const Controllers = styled.div`
    display: flex;
`;

