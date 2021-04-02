import React from 'react';
import Search from '../Search';
import MainMenu from '../MainMenu';
import DarkMode from '../DarkMode';
import UserMenu from '../UserMenu';
import { HeaderWrapper, Left, Right } from './Header.styled';

function Header({ query, setQuery }) {
  return (
    <HeaderWrapper>
      <Left>
        <MainMenu />
        <Search query={query} setQuery={setQuery} />
      </Left>
      <Right>
        <DarkMode />
        <UserMenu />
      </Right>
    </HeaderWrapper>
  );
}

export default Header;
