import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Content, Footer } from './Home.styled';
import Header from '../../components/Header';
import VideoHome from '../../components/VideoHome';

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
      <Header />
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
        <>
          <Content>
            <VideoHome />
          </Content>
          <Footer>
            <Link to="/login">let me in →</Link>
          </Footer>
        </>
      )}
    </section>
  );
}

export default HomePage;
