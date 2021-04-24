import React from 'react';
import Search from '../Search';
import Menu from '../Menu';
import Theme from '../Theme';
import AvatarIcon from '../Avatar';
import { HeaderStyle, Alignment } from './Header.styles';
import { useApp } from '../../providers/App/AppProvider';

function Header() {
  const context = useApp();
  const { isDark } = context;

  return (
    <HeaderStyle isDark={isDark}>
      <Alignment float="left">
        <Menu />
        <Search />
      </Alignment>
      <Alignment float="right">
        <Theme />
        <AvatarIcon />
      </Alignment>
    </HeaderStyle>
  );
}

export default Header;
