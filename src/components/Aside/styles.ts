import styled from "styled-components";

export const Container = styled.aside`
  grid-area: AS;
  background-color: ${props => props.theme.colors.secundary}; 
  color: ${props => props.theme.colors.white};
  margin-left: 20px;
  border-right: 1px solid ${props => props.theme.colors.gray}; 
`;

export const Header = styled.header`
  height: 70px;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 40px;
  width: 40px;
`;

export const MenuContainer = styled.nav`
  display: flex;
  margin-top: 40px;
  flex-direction: column;
`;

export const MenuLink = styled.a`
  color: ${props => props.theme.colors.info};
  text-decoration: none;
  margin: 6px 0;
  display: flex;
  align-items: center;
  transition: opacity transform .3s;

  &:hover {
    opacity: 0.6;

    > svg {
      transform: scale(1.2);
    }
  }

  > svg {
    font-size: 22px;
    margin-right: 4px;
  }
`;

export const Title = styled.h3`
  color: ${props => props.theme.colors.white};
  margin-left: 8px;
`;

