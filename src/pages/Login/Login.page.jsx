import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { GlobalContext } from '../../context/GlobalContext';

import { useAuth } from '../../providers/Auth';
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
    <section className="login">
      <h1>Welcome, please login.</h1>
      <form onSubmit={authenticate} className="login-form">
        <div className="form-group">
          <label htmlFor="username">
            <strong>username </strong>
            <input required type="text" id="username" />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <strong>password </strong>
            <input required type="password" id="password" />
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </section>
  );
}

export default LoginPage;
