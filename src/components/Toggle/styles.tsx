import styled from "styled-components";
import Switch, { ReactSwitchProps } from 'react-switch'

export const Container = styled.div`
  display: flex;
  align-items: center;
  
`;

export const ToggleLabel = styled.span`
  color: ${props => props.theme.colors.white};
`;

export const MySwitch = styled(Switch).attrs(
  ({ theme }) => ({
    onColor: theme.colors.info,
    offColor: theme.colors.warning
  })
)<ReactSwitchProps>`
  margin: 0 8px;
`;
