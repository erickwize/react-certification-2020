import React, { useState, useContext } from 'react';
import {
  Header,
  HeaderWrapper,
  HomeButton,
  Search,
  HeaderToggleWrapper,
  HeaderToggle,
  HeaderToggleLabel,
  LoginMenu,
  SearchWrapper,
  SearchSpan,
} from './Header.styles';
import { useHistory } from '../../utils/hooks/useHistory';
import HomeIcon from './img/m_logo.png';
import LoginIcon from './img/user_icon.png';
import SearchIcon from './img/search_icon.png';
import { StyleContext } from '../../utils/hooks/useContext';

function HeaderMenu({ doSearch, dispatch }) {
  const { header } = useContext(StyleContext);
  const [searchKeyword, setSearchKeyword] = useState('wizeline');
  const { history, setHistoryVal } = useHistory('');

  const handleSearch = (ev) => {
    if (/Enter|Blur/i.test(ev.key) && searchKeyword !== history) {
      setHistoryVal(searchKeyword);
      doSearch(searchKeyword);
    }
  };
  return (
    <Header data-testid="yt-header" background={header.background}>
      <HeaderWrapper>
        <a href="/">
          <HomeButton img={HomeIcon} />
        </a>
        <SearchWrapper background={header.input}>
          <Search
            type="text"
            id="name"
            value={searchKeyword}
            placeholder="Search..."
            onChange={({ target }) => setSearchKeyword(target.value)}
            onBlur={() => handleSearch({ key: 'Blur' })}
            onKeyDown={handleSearch}
          />
          <SearchSpan img={SearchIcon} onClick={() => handleSearch({ key: 'Enter' })} />
        </SearchWrapper>
      </HeaderWrapper>
      <HeaderWrapper>
        <HeaderToggleWrapper>
          <HeaderToggle
            type="checkbox"
            name="darkMode"
            id="darkMode"
            onChange={({ target }) => dispatch(target.checked ? 'dark' : 'light')}
          />
          <HeaderToggleLabel htmlFor="darkMode">Dark mode</HeaderToggleLabel>
        </HeaderToggleWrapper>
        <LoginMenu img={LoginIcon} />
      </HeaderWrapper>
    </Header>
  );
}

export default HeaderMenu;
