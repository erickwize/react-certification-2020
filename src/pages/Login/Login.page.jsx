import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import { useHistory, useLocation } from 'react-router-dom';

import {
  LoginSecion,
  Card,
  Title,
  Label,
  DivInput,
  Input,
  Button,
  DisplayError,
} from './Login.styled';
import { useGlobalProvider } from '../../store/global/global.provider';
import { loginUser, showModal } from '../../store/global/GlobalAction';

function LoginPage() {
  const history = useHistory();
  const location = useLocation();
  const {
    state: { errorAuth, user },
    dispatch,
  } = useGlobalProvider();

  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { background } = location.state || { background: { pathname: '/' } };

  /* eslint-disable */
  useEffect(() => {
    if (!user) {
      showModal(dispatch, true);
    } else {
      return history.replace(background);
    }
  }, [user]);
  /* eslint-disable */

  const closeModal = () => {
    showModal(dispatch, false);
    history.replace(background);
  };

  const authenticate = async (event) => {
    event.preventDefault();
    const authenticated = await loginUser(dispatch, userName, password);
    if (authenticated) {
      showModal(dispatch, false);
      return history.replace(background); // Replace the curren route with the background route
    }
  };

  return ReactDom.createPortal(
    <>
      <LoginSecion onClick={() => closeModal()} />
      <Card>
        <Title>Welcome Back!</Title>
        <form onSubmit={authenticate}>
          <DivInput>
            <Label htmlFor="loginUser">User</Label>
            <Input
              required
              type="text"
              id="loginUser"
              placeholder="wizeline@wizeline.com"
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
            />
          </DivInput>
          <DivInput>
            <Label htmlFor="loginPassword">Password</Label>
            <Input
              required
              type="password"
              id="loginPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </DivInput>
          <DivInput>
            <Button type="submit">Log In</Button>
          </DivInput>
          {errorAuth && <DisplayError>{errorAuth}</DisplayError>}
        </form>
      </Card>
    </>,
    document.getElementById('portal')
  );
}

export default LoginPage;
