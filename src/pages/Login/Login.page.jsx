import React from 'react';
import { useHistory } from 'react-router';
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

  const authenticateUser = async (event) => {
    event.preventDefault();
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    dispatch({
      type: 'SET_USER_INFO',
      payload: await loginApi(username.value, password.value),
    });

    history.push('/');
  };

  return (
    <LoginView data-testid="user-login">
      <LoginForm onSubmit={authenticateUser}>
        <div className="form-group">
          <LabelWrapper htmlFor="username">
            <Label>Username</Label>
            <Inputs required type="text" id="username" />
          </LabelWrapper>
        </div>
        <div className="form-group">
          <LabelWrapper htmlFor="password">
            <Label>Password</Label>
            <Inputs required type="password" id="password" />
          </LabelWrapper>
        </div>
        <Submit type="submit">Log in</Submit>
      </LoginForm>
    </LoginView>
  );
}

export default UserLogin;
