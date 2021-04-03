import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';
import NavBar from '../../components/NavBar/Navbar';
import VideosSpace from '../../components/VideosSpace/VideosSpace';
import { VideoProvider } from '../../providers/Videos/VideoContext';
import { SectionProvider } from '../../providers/Section/SectionContext';
import { RelatedVideoProvider } from '../../providers/Videos/RelatedVideoContext' ;
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
      <VideoProvider>
        <NavBar/>
        <SectionProvider>
          <RelatedVideoProvider>
            <VideosSpace/>
          </RelatedVideoProvider>
        </SectionProvider>
      </VideoProvider>
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
        <Link to="/login">{/*let me in →*/}</Link>
      )}
    </section>
  );
}

export default HomePage;
