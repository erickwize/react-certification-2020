import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import  Header  from '../../components/Header';
import VideoCards from '../../components/VideoCards';

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
    <>
      <Header />
      <section className="homepage" ref={sectionRef}>
        <h1>Hello stranger!</h1>
        {authenticated ? (
          <>
            <h2>Good to have you back</h2>
            <span>
              <Link to="/" onClick={deAuthenticate}>
                ← logout
              </Link>
              <span className="separator" />
              <Link to="/secret">show me something cool →</Link>
            </span>
          </>
        ) : (
          <div>
            <Link to="/login">let me in →</Link>
            <VideoCards />
          </div>
        )}
      </section>
    </>
  );
}

export default HomePage;
