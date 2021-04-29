import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Wrapper, Avatar } from './UserMenu.styled';
import { useAuth } from '../../providers/Auth';
import { GlobalContext } from '../../context/GlobalContext';

function UserMenu() {
  const history = useHistory();
  const { authenticated, logout } = useAuth();
  const globalContext = useContext(GlobalContext);

  function deAuthenticate(event) {
    event.preventDefault();
    globalContext.setSessionData({ loggedIn: false });
    logout();
    history.push('/');
  }
  const onClickHandler = (e) => {
    if (authenticated) {
      deAuthenticate(e);
    } else {
      history.push('/login');
    }
  };
  return (
    <Wrapper>
      <Avatar
        className={`${authenticated ? 'logged' : 'notlogged'}`}
        theme={globalContext.colors}
        onClick={onClickHandler}
      />
    </Wrapper>
  );
}

export default UserMenu;
