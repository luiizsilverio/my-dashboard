import styled from "styled-components";

export const Container = styled.header`
  grid-area: MH;
  background-color: ${props => props.theme.colors.secundary};
  /* color: ${props => props.theme.colors.white}; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  border-bottom: 1px solid ${props => props.theme.colors.gray};
`;

export const Profile = styled.header`
  color: ${props => props.theme.colors.white};

`;

export const Welcome = styled.h3`
`;

export const UserName = styled.span`
`;
