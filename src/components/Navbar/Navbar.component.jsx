import React from 'react';

import SearchInput from '../SearchInput';
import DrawerMenu from '../DrawerMenu';
import UserActions from '../UserActions';
import Toggle from '../Toggle';
import './Navbar.styles.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <DrawerMenu />
        <SearchInput />
      </div>
      <div className="navbar-right">
        <div className="dark-mode">
          <Toggle />
          <span className="text">Dark mode</span>
        </div>
        <UserActions />
      </div>
    </div>
  );
}

export default Navbar;
