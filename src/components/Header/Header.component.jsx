import React, { useContext } from 'react';
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
import HomeIcon from './img/m_logo.png';
import LoginIcon from './img/user_icon.png';
import SearchIcon from './img/search_icon.png';
import { GlobalContext } from '../../providers/GlobalContext';

function HeaderMenu({ doSearch, dispatch }) {
  const { header, history, search } = useContext(GlobalContext);
  const handleSearch = (ev) => {
    if (/Enter|Blur/i.test(ev.key) && search !== history) {
      doSearch(search);
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
      </HeaderWrapper>
    </Header>
  );
}

export default HeaderMenu;
