import React from 'react';

import './SearchInput.styles.css';
import { ReactComponent as SearchIcon } from '../../assets/icons/search-solid.svg';

function SearchInput() {
  return (
    <div className="search-input">
      <div>
        <div className="search-icon">
          <SearchIcon />
        </div>
        <div>
          <input type="text" placeholder="Search..." />
        </div>
      </div>
    </div>
  );
}

export default SearchInput;
