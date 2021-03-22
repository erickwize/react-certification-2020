import React from 'react';

import { Link } from 'react-router-dom';

function MenuHorizontal() {
  return (
    <ul className="navbar-responsive-nav">
      <li className="active">
        <Link to="/" className="nav-links disabledCursor">
          <span className="text-truncate ">Home</span>
        </Link>
      </li>
      <li>
        <Link to="/" className="nav-links disabledCursor">
          <span className="text-truncate ">Home</span>
        </Link>
      </li>
      <li>
        <Link to="/" className="nav-links disabledCursor">
          <span className="text-truncate ">Home</span>
        </Link>
      </li>
    </ul>
  );
}

export default MenuHorizontal;
