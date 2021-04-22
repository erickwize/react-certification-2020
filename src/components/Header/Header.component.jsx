import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search';
// import MainMenu from '../MainMenu';
import DarkMode from '../DarkMode';
import UserMenu from '../UserMenu';
import { HeaderWrapper, Left, Right, Favorite } from './Header.styled';
import { GlobalContext } from '../../context/GlobalContext';
import { useAuth } from '../../providers/Auth';

function Header() {
  const globalContext = useContext(GlobalContext);
  const { authenticated } = useAuth();

  return (
    <HeaderWrapper theme={globalContext.colors}>
      <Left>
        <Link to="/">
          <span>🏠</span>
        </Link>
        {authenticated && (
          <Link to="/favorites">
            <Favorite>⭐</Favorite>
          </Link>
        )}
        <Search />
      </Left>
      <Right>
        <DarkMode />
        <UserMenu />
      </Right>
    </HeaderWrapper>
  );
}

export default Header;
