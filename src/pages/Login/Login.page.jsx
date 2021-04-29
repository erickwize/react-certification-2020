import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { loginApi } from '../../api';

import {
  LoginView,
  LoginForm,
  Submit,
  Inputs,
  Label,
  LabelWrapper,
} from './Login.styles';

function UserLogin({ dispatch }) {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const authenticateUser = async (event) => {
    event.preventDefault();
    if (username && password) {
      dispatch({
        type: 'SET_USER_INFO',
        payload: await loginApi(username, password),
      });
      history.push('/');
    }
  };

  return (
    <LoginView data-testid="user-login">
      <LoginForm onSubmit={authenticateUser}>
        <div className="form-group">
          <LabelWrapper htmlFor="username">
            <Label>Username</Label>
            <Inputs
              required
              type="text"
              id="username"
              placeholder="username"
              value={username}
              onChange={({ target }) => setUsername(target.value)}
            />
          </LabelWrapper>
        </div>
        <div className="form-group">
          <LabelWrapper htmlFor="password">
            <Label>Password</Label>
            <Inputs
              required
              type="password"
              id="password"
              placeholder="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
          </LabelWrapper>
        </div>
        <Submit data-testid="user-login-button" type="submit">
          Log in
        </Submit>
      </LoginForm>
    </LoginView>
  );
}

export default UserLogin;
