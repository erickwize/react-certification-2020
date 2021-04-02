import React from 'react';

import './SearchInput.styles.css';
import { ReactComponent as SearchIcon } from '../../assets/icons/search-solid.svg';

function SearchInput(props) {
  function handleInputChange(event) {
    props.setTypedSearchValue(event.target.value);
  }

  return (
    <div className="search-input">
      <div>
        <div className="search-icon">
          <SearchIcon />
        </div>
        <div>
          <input
            type="text"
            placeholder="Search..."
            value={props.typedSearchValue}
            onChange={handleInputChange}
            onKeyDown={props.onEnterSearch}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchInput;
