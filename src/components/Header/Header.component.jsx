import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import HomeIcon from './img/m_logo.png';
import LoginIcon from './img/user_icon.png';
import SearchIcon from './img/search_icon.png';
import { GlobalContext } from '../../providers/GlobalContext';

// styling
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

function HeaderMenu({ doSearch, dispatch }) {
  const { header, history, search } = useContext(GlobalContext);
  const urlHistory = useHistory();

  const handleSearch = (ev) => {
    if (/Enter|Blur/i.test(ev.key) && search !== history) {
      doSearch(search);
    }
  };

  return (
    <Header data-testid="yt-header" background={header.background}>
      <HeaderWrapper>
        <HomeButton img={HomeIcon} onClick={() => urlHistory.push('/')} />
        <SearchWrapper background={header.input}>
          <Search
            type="text"
            id="name"
            value={search}
            placeholder="Search..."
            onChange={({ target }) =>
              dispatch({ type: 'SET_SEARCH_KEYWORD', payload: target.value })
            }
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
            onChange={({ target }) =>
              dispatch({ type: `SET_${target.checked ? 'DARK' : 'LIGHT'}_MODE` })
            }
          />
          <HeaderToggleLabel htmlFor="darkMode">Dark mode</HeaderToggleLabel>
        </HeaderToggleWrapper>
        <LoginMenu img={LoginIcon} />
        <Link to="/login">Log in</Link>
        <Link to="/user/favs">Favorites</Link>
      </HeaderWrapper>
    </Header>
  );
}

export default HeaderMenu;
