import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';
import './Home.styles.css';

function HomePage() {
  const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  return (
    <section className="homepage" ref={sectionRef}>
      <h1>Hello stranger!</h1>
      {authenticated ? (
        <>
          <h2>HELLO WORLD</h2>
          <span>
            <Link to="/" onClick={deAuthenticate}>
              ← logout
            </Link>
        </>
      ) : (
        <Link to="/login">let me in →</Link>
      )}
    </section>
  );
}

export default HomePage;
