import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { Button } from './LoginButton.styled';
import { useGlobalProvider } from '../../store/global/global.provider';
import { logOut } from '../../store/global/GlobalAction';

const LoginButton = () => {
  const history = useHistory();
  const location = useLocation();

  const {
    state: { user },
    dispatch,
  } = useGlobalProvider();

  const handleButton = () => {
    if (user) return logOut(dispatch);
    history.push({ pathname: '/login', state: { background: location } });
  };

  const value = user ? <>Log out</> : <>Sign in</>;

  return (
    <Button title="singInButton" onClick={handleButton}>
      {value}
    </Button>
  );
};

export default LoginButton;
