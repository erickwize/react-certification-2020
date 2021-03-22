import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import MenuVertical from '../Menus/Vertical.component';

import './Sidebar.styles.css';

function Sidebar() {
  const [hover, setHover] = useState(false);

  const toggleHover = () => {
    setHover(!hover);
  };

  return (
    <aside
      onMouseOver={() => toggleHover()}
      onMouseOut={() => toggleHover()}
      onFocus={() => {}}
      onBlur={() => {}}
      className={hover ? 'navbar-aside-container expanded' : 'navbar-aside-container'}
    >
      <ul className="navbar-aside-menu header-brand">
        <li>
          <Link to="/" className="nav-links">
            <FontAwesomeIcon icon={faPlay} />
            <span className="navbar-aside-logo text-truncate">Player</span>
          </Link>
        </li>
      </ul>
      <div className="shadow-bottom" />
      <MenuVertical />
    </aside>
  );
}

export default Sidebar;
