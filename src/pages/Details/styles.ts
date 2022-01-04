import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div``;

export const Filters = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 20px;

  .tag-filter {
    font-size: 18px;
    font-weight: 500;
    background: none;
    color: ${props => props.theme.colors.white};    
    margin: 0 10px;    
    transition: opacity transform .3s;        

    &:hover {
      opacity: 0.7;
      transform: scale(.95);
    }    
  }

  .tag-inativo {
    text-decoration: line-through;
    color: ${props => props.theme.colors.gray};
  }

  .tag-recorrente::after {
    content: "";
    display: block;
    width: 55px;
    margin: 0 auto;
    border-bottom: 5px solid ${props => props.theme.colors.success};
  }
  
  .tag-eventual::after {
    content: "";
    display: block;
    width: 55px;
    margin: 0 auto;
    border-bottom: 5px solid ${props => props.theme.colors.warning};
  }
`;
