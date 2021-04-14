import React, { useContext } from 'react';
import Search from '../Search';
import MainMenu from '../MainMenu';
import DarkMode from '../DarkMode';
import UserMenu from '../UserMenu';
import { HeaderWrapper, Left, Right } from './Header.styled';
import { GlobalContext } from '../../context/GlobalContext';

function Header() {
  const globalContext = useContext(GlobalContext);
  return (
    <HeaderWrapper theme={globalContext.theme.colors}>
      <Left>
        <MainMenu />
        <Search />
      </Left>
      <Right>
        <DarkMode />
        <UserMenu />
      </Right>
    </HeaderWrapper>
  );
}

export default Header;
