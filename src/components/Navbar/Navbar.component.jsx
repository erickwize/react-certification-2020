import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import SearchInput from '../SearchInput';
import DrawerMenu from '../DrawerMenu';
import UserActions from '../UserActions';
import Toggle from '../Toggle';

import './Navbar.styles.css';

function Navbar(props) {
  const history = useHistory();
  const [typedSearchValue, setTypedSearchValue] = useState(props.searchValue);

  function onEnterSearch(event) {
    if (event.key === 'Enter') {
      props.setSearchValue(typedSearchValue);
      history.push('/');
    }
  }
  return (
    <div className="navbar">
      <div className="navbar-left">
        <DrawerMenu />
        <SearchInput
          onEnterSearch={onEnterSearch}
          typedSearchValue={typedSearchValue}
          setTypedSearchValue={setTypedSearchValue}
        />
      </div>
      <div className="navbar-right">
        <div className="dark-mode">
          <Toggle />
          <span className="text">Dark mode</span>
        </div>
        <UserActions />
      </div>
    </div>
  );
}

export default Navbar;
