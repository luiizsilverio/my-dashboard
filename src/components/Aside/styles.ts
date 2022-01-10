import styled, { css } from "styled-components";

interface Props {
  menuOpen: boolean
}

export const Container = styled.aside<Props>`
  grid-area: AS;
  background-color: ${props => props.theme.colors.secundary}; 
  color: ${props => props.theme.colors.white};
  padding-left: 20px;
  border-right: 1px solid ${props => props.theme.colors.gray}; 
  position: relative;

  @media(max-width: 700px) {
    padding-left: 7px;
    position: fixed;
    z-index: 2;

    width: 170px;
    height: ${props => props.menuOpen ? '100vh' : '70px'};
    overflow: hidden;

    ${props => !props.menuOpen && css`
      border: none;
      border-bottom: 1px solid ${props=> props.theme.colors.gray};
    `};
  }
`;

export const Header = styled.header`
  height: 70px;
  display: flex;
  align-items: center;

  > a {
    display: flex;
    flex: 1;
    align-items: center;
    text-decoration: none;
  }  
`;

export const Logo = styled.img`
  height: 40px;
  width: 40px;  

  @media(max-width: 700px) {
    display: none;
  }
`;

export const Title = styled.h3`
  color: ${props => props.theme.colors.white};
  margin-left: 8px;

  @media(max-width: 700px) {
    display: none;
  }
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

export const MenuItemButton = styled.button`
  font-size: 16px;
  color: ${props => props.theme.colors.info};
  border: none;
  background-color: transparent;
  
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

export const ToggleMenu = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  font-size: 22px;
  background-color: ${props => props.theme.colors.warning};
  color: ${props => props.theme.colors.white};
  transition: opacity .3s;
  
  &:hover {
    opacity: 0.7;
  }
  
  display: none;
  
  @media(max-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Footer = styled.footer<Props>`
  display: none;
  position: absolute;
  bottom: 30px;
  left: 14px;
  font-size: 14px;

  @media(max-width: 560px) {
    display: ${props => props.menuOpen ? 'flex' : 'none'};
  }
`;
