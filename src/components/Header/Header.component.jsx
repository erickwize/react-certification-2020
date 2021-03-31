import React from 'react';
import {
  Header,
  HeaderWrapper,
  Menu,
  Search,
  HeaderToggleWrapper,
  HeaderToggle,
  HeaderToggleLabel,
  LoginMenu,
} from './Header.styles';
import MenuIcon from './img/icon_menu.png';
import LoginIcon from './img/icon_login.png';

function HeaderMenu() {
  return (
    <Header data-testid="yt-header">
      <HeaderWrapper>
        <Menu img={MenuIcon} />
        <Search type="text" id="name" placeholder="Search..." disabled />
      </HeaderWrapper>
      <HeaderWrapper>
        <HeaderToggleWrapper>
          <HeaderToggle type="checkbox" name="darkMode" id="darkMode" />
          <HeaderToggleLabel htmlFor="darkMode">Dark mode</HeaderToggleLabel>
        </HeaderToggleWrapper>
        <LoginMenu img={LoginIcon} />
      </HeaderWrapper>
    </Header>
  );
}

export default HeaderMenu;
