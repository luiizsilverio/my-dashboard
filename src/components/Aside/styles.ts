import styled from "styled-components";

export const Container = styled.aside`
  grid-area: AS;
  background-color: ${props => props.theme.colors.secundary}; 
  color: ${props => props.theme.colors.white};
`;
