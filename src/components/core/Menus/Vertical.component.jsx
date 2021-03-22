import React from 'react';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStar } from '@fortawesome/free-solid-svg-icons';

function MenuVertical() {
  return (
    <ul className="navbar-aside-menu">
      <li className="active">
        <Link to="/" className="nav-links disabledCursor">
          <FontAwesomeIcon icon={faHome} />
          <span className="text-truncate ">Home</span>
        </Link>
      </li>
      <li className="">
        <Link to="/" className="nav-links disabledCursor">
          <FontAwesomeIcon icon={faStar} />
          <span className="text-truncate ">Favorities</span>
        </Link>
      </li>
    </ul>
  );
}

export default MenuVertical;
