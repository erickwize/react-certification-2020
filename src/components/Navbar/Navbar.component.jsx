import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHome, faMoon, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

import './Navbar.styles.css';

function Navbar() {
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
          <FontAwesomeIcon icon={faMoon} />
        </i>
      </div>
    </div>
  );
}

export default Navbar;
