import styled from "styled-components";

interface Props {
  color: string
}

export const Container = styled.div<Props>`
  width: 32%;
  height: 150px;
  margin: 10px 0;
  background-color: ${props => props.color};
  color: ${props => props.theme.colors.white};
  border-radius: 8px;
  padding: 10px 20px;
  position: relative;
  overflow: hidden;

  > img {
    position: absolute;
    height: 110%;
    top: -10px;
    right: -20px;
    opacity: .3;
  }

  > span {
    font-size: 18px;
    font-weight: 500;
  }

  > small {
    font-size: 12px;
    position: absolute;
    bottom: 10px;  
  }

  @media(max-width: 770px) {
    padding: 10px;

    > span {
      font-size: 14px;      
    }

    > h1 {
      word-wrap: break-word;
      font-size: 20px;
      
      > strong {
        font-size: 14px;      
        display: inline-block;
        width: 100%;
      }
    }
  }

  @media(max-width: 420px) {
    padding: 10px 20px;
    width: 100%;

    > h1 {
      font-size: 24px;
    }

    > span {
      font-size: 18px;
    }

    > small {
      font-size: 14px;
    }
  }

`;
