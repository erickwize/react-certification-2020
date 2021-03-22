import React, { useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';

import MenuHorizontal from '../Menus/Horizontal.component';

import './Navbar.styles.css';

import Search from '../Search';

function Navbar() {
  const mainNavRef = useRef(null);

  function handleOnMainNavClick() {
    const mainNav = mainNavRef.current;
    mainNav.classList.toggle('active');
  }

  return (
    <>
      <nav className="navbar-container">
        <span className="navbar-toggle">
          <FontAwesomeIcon icon={faBars} onClick={handleOnMainNavClick} />
        </span>
        <ul className="navbar-nav">
          <li>
            <Search />
          </li>
        </ul>
        <ul className="navbar-user">
          <li>
            <span className="nav-links disabledCursor">
              <FontAwesomeIcon icon={faUser} />
            </span>
          </li>
        </ul>
      </nav>

      <nav className="navbar-responsive-container" ref={mainNavRef}>
        <MenuHorizontal />
      </nav>
    </>
  );
}

export default Navbar;
