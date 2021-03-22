import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './Search.styles.css';

function Search() {
  return (
    <div className="search">
      <input className="search-box" type="text" name="search" placeholder="Search..." />
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
    </div>
  );
}

export default Search;
