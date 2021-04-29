import React from 'react';
import styled from 'styled-components';

import { DarkmodeButton } from './DarkmodeButton/DarkmodeButton.component';
import { ProfileButton } from './ProfileButton/ProfileButton.component';
import { Searchbar } from './Searchbar/Searchbar.component';
import { useGlobal } from '../../providers/Global.provider';

const StyledHeader = styled.header`
  align-items: center;
  background-color: ${props => props.theme.header.backgroundColor};
  border-bottom: ${props => props.theme.header.borderBottom};
  box-shadow: ${props => props.theme.header.boxShadow};
  display: flex;
  padding: 15px;
  position: fixed;
  width: 100%;
  z-index: 2;

  svg{
    fill: ${props => props.theme.header.svgColor};
  }
`;

export const Header = () => {

  const { state } = useGlobal();

  return <StyledHeader theme={state.theme}>
      <Searchbar/>
      <DarkmodeButton/>
      <ProfileButton/>
  </StyledHeader>;
}