import React from 'react';
import { Link } from 'react-router-dom';

import { StyledHeader, NavStyle } from './Header.styled';
import { Search, ThemeButton, MenuButton } from '../index';

function Header() {
  return (
    <StyledHeader>
      <div className="bar">
        <MenuButton />
        <Search />
        <NavStyle>
          <ThemeButton />
          <Link to="/login" className="navButton">
            Sign in
          </Link>
        </NavStyle>
      </div>
    </StyledHeader>
  );
}
export default Header;
