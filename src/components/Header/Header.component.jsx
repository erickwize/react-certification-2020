import React from 'react';

import './Header.styles.css';

function HeaderMenu() {
  return (
    <header className="headerMenu">
      <div className="headerWrapper">
        <span className="icon"/>
        <input type="text" id="name" placeholder="Search..." disabled/>
      </div>
      <div className="headerWrapper">
        <div className="headerToggleWrapper">
          <input type="checkbox" name="darkMode" className="headerToggle" id="darkMode"/>
          <label htmlFor="darkMode" className="headerToggleLabel">Dark mode</label>
        </div>
        <span className="loginIcon"/>
      </div>
    </header>
  );
}

export default HeaderMenu;
