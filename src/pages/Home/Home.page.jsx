import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Content, Footer } from './Home.styled';
import Header from '../../components/Header';
import VideoHome from '../../components/VideoHome';

import { useAuth } from '../../providers/Auth';
import './Home.styles.css';

function HomePage() {
  const history = useHistory();
  const [query, setQuery] = useState('');
  const [currVid, setCurrVid] = useState({});
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  return (
    <section className="homepage" ref={sectionRef}>
      <Header query={query} setQuery={setQuery} />
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
            <VideoHome query={query} currVid={currVid} setCurrVid={setCurrVid} />
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
