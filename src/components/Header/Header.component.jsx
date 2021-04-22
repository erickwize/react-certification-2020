import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
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
  HeaderMenuWrapper,
  HeaderMenuLink,
} from './Header.styles';

function HeaderMenu({ doSearch, dispatch }) {
  const { header, history, search, user } = useContext(GlobalContext);
  const [showMenu, setMenuVisibility] = useState(false);
  const urlHistory = useHistory();

  const handleSearch = (ev) => {
    if (/Enter|Blur/i.test(ev.key) && search !== history) {
      doSearch(search);
    }
  };

  const updatePage = (url) => {
    setMenuVisibility(false);
    urlHistory.push(url);
  };

  return (
    <Header data-testid="yt-header" background={header.background}>
      <HeaderWrapper>
        <HomeButton img={HomeIcon} onClick={() => updatePage('/')} />
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
        <LoginMenu img={LoginIcon} onClick={() => setMenuVisibility(!showMenu)} />
        {showMenu ? (
          <HeaderMenuWrapper>
            <HeaderMenuLink onClick={() => updatePage('/login')}>
              {user.id ? 'Log out' : 'Log in'}
            </HeaderMenuLink>
            <HeaderMenuLink onClick={() => updatePage('/user/favorites')}>
              Favorites
            </HeaderMenuLink>
          </HeaderMenuWrapper>
        ) : null}
      </HeaderWrapper>
    </Header>
  );
}

export default HeaderMenu;
