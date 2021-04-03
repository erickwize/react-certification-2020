import React from 'react';
import { Link } from 'react-router-dom';

import { StyledHeader, NavStyle } from './Header.styled';
import MenuButton from '../../styles/MenuButton';
import { Search, ThemeButton } from '../index';

function Header({ handleChange }) {
  return (
    <StyledHeader>
      <div className="bar">
        <MenuButton data-testid="MenuButton">
          <span />
          <span />
          <span />
        </MenuButton>
        <Search handleChange={handleChange} />
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
