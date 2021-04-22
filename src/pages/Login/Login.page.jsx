import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';

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
import { loginUser } from '../../store/global/GlobalAction';

function LoginPage() {
  const history = useHistory();
  const location = useLocation();
  const {
    state: { errorAuth },
    dispatch,
  } = useGlobalProvider();

  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { background } = location.state || { background: { pathname: '/' } };

  const authenticate = async (event) => {
    event.preventDefault();
    const authenticated = await loginUser(dispatch, userName, password);
    if (authenticated) return history.replace(background); // Replace the curren route with the background route
  };

  return (
    <>
      <LoginSecion>
        <Card>
          <Title>Welcome Back!</Title>
          <form onSubmit={authenticate}>
            <DivInput>
              <Label htmlFor="loginUser">User</Label>
              <Input
                required
                type="text"
                id="loginUser"
                placeholder="User"
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
      </LoginSecion>
    </>
  );
}

export default LoginPage;
