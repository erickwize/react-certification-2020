import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import Header from '../../components/Header';
import { GlobalContext } from '../../context/GlobalContext';

import { useAuth } from '../../providers/Auth';
import { Section, Title, Label, Input, Button } from './Login.styled';
import './Login.styles.css';

function LoginPage() {
  const { login } = useAuth();
  const history = useHistory();
  const globalContext = useContext(GlobalContext);

  function authenticate(event) {
    event.preventDefault();
    globalContext.setSessionData({ loggedIn: true });
    login();
    history.push('/favorites');
  }

  return (
    <>
      <Header />
      <Section className="login" theme={globalContext.colors}>
        <Title>Welcome, please login.</Title>
        <form onSubmit={authenticate} className="login-form">
          <div className="form-group">
            <Label htmlFor="username" theme={globalContext.colors}>
              username
              <Input required type="text" id="username" theme={globalContext.colors} />
            </Label>
          </div>
          <div className="form-group">
            <Label htmlFor="password" theme={globalContext.colors}>
              password
              <Input
                required
                type="password"
                id="password"
                theme={globalContext.colors}
              />
            </Label>
          </div>
          <Button type="submit" theme={globalContext.colors}>
            Login
          </Button>
        </form>
      </Section>
    </>
  );
}

export default LoginPage;
