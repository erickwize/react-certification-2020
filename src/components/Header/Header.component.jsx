import React from 'react';
import Search from '../Search';
import Menu from '../Menu';
import Theme from '../Theme';
import AvatarIcon from '../Avatar';
import { HeaderStyle } from './Header.styles';

const Header = () => (
  <HeaderStyle>
    <div style={{ float: 'left', display: 'flex', alignItems: 'center' }}>
      <Menu />
      <Search />
    </div>
    <div style={{ float: 'right', display: 'flex', alignItems: 'center' }}>
      <Theme />
      <AvatarIcon />
    </div>
  </HeaderStyle>
);

export default Header;
