import React from 'react';
import styled from 'styled-components';

import NavStyle from '../styles/NavStyle';
import Switch from '../styles/SwitchStyle';
import MenuButton from '../styles/MenuButton';
import Search from '../styles/SearchStyle';

const StyledHeader = styled.header`
  background-color: white;
  height: 50px;
  .bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    @media (max-width: 400px) {
      justify-content: center;
    }
  }
`;

function Header() {
  const checked = true;
  return (
    <StyledHeader>
      <div className="bar">
        <MenuButton>
          <span />
          <span />
          <span />
        </MenuButton>
        <Search className="inputSearch" type="search" placeholder="Buscar contenido" />
        <NavStyle>
          <Switch
            className="switch-checkbox"
            id="switch"
            type="checkbox"
            checked={checked}
            // onChange={onChange}
          />
          <li className="navButton">Sign in</li>
        </NavStyle>
      </div>
    </StyledHeader>
  );
}
export default Header;
