import styled from "styled-components";

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
`;
