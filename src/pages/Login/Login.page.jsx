import React from 'react';
import {
  LoginView,
  LoginForm,
  Submit,
  Inputs,
  Label,
  LabelWrapper,
} from './Login.styles';

function UserLogin() {
  return (
    <LoginView data-testid="user-login">
      <LoginForm>
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
