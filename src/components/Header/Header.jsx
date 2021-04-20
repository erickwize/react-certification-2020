import React, { useState } from 'react';

import { StyledHeader, NavStyle } from './Header.styled';
import { Search, ThemeButton, MenuButton, LoginButton, Sidebar } from '../index';

function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <StyledHeader>
        <div className="bar">
          <MenuButton setMenu={setMenu} menu={menu} />
          <Search />
          <NavStyle>
            <ThemeButton />
            <LoginButton />
          </NavStyle>
        </div>
      </StyledHeader>
      <Sidebar setMenu={setMenu} menu={menu} />
    </>
  );
}
export default Header;
