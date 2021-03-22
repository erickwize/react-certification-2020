import React from 'react';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function MenuVertical() {
  return (
    <ul className="navbar-aside-menu">
      <li className="active">
        <Link to="/" className="nav-links disabledCursor">
          <FontAwesomeIcon icon={faBars} />
          <span className="text-truncate ">Home</span>
        </Link>
      </li>
      <li className="">
        <Link to="/" className="nav-links disabledCursor">
          <FontAwesomeIcon icon={faBars} />
          <span className="text-truncate ">Home</span>
        </Link>
      </li>
      <li className="">
        <Link to="/" className="nav-links disabledCursor">
          <FontAwesomeIcon icon={faBars} />
          <span className="text-truncate ">Home</span>
        </Link>
      </li>
    </ul>
  );
}

export default MenuVertical;
