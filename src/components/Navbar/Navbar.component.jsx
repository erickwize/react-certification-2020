import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faHome,
  faMoon,
  faSignInAlt,
  faSun,
} from '@fortawesome/free-solid-svg-icons';

import './Navbar.styles.css';

function Navbar() {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleDarkMode = () => setDarkTheme(!darkTheme);

  return (
    <div className="navbar">
      <div className="left-navbar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="center-navbar">
        <i>
          <FontAwesomeIcon icon={faHome} className="active" />
        </i>
        <i>
          <FontAwesomeIcon icon={faHeart} />
        </i>
      </div>
      <div className="right-navbar">
        <i>
          <FontAwesomeIcon icon={faSignInAlt} />
        </i>
        <i>
          {darkTheme ? (
            <FontAwesomeIcon icon={faSun} onClick={toggleDarkMode} />
          ) : (
            <FontAwesomeIcon icon={faMoon} onClick={toggleDarkMode} />
          )}
        </i>
      </div>
    </div>
  );
}

export default Navbar;
