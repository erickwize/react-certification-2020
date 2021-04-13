import React from 'react';
import styled from 'styled-components';

import { MenuButton } from './MenuButton/MenuButton.component';
import { DarkmodeButton } from './DarkmodeButton/DarkmodeButton.component';
import { ProfileButton } from './ProfileButton/ProfileButton.component';
import { Searchbar } from './Searchbar/Searchbar.component';

const StyledHeader = styled.header`
  align-items: center;
  background-color: white;
  border-bottom: 1px solid #dcdcdc;
  display: flex;
  padding: 15px;
  position: fixed;
  top: 0;
  width: 100%;
`;

export const Header = ({setSearchValue}) => {
  return <StyledHeader>
      <MenuButton/>
      <Searchbar setSearchValue={setSearchValue}/>
      <DarkmodeButton/>
      <ProfileButton/>
  </StyledHeader>;
}