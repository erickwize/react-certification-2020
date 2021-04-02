import React, { useRef } from 'react';
// import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
// import { useAuth } from '../../providers/Auth';
import './Home.styles.css';
import VideoCard from '../../components/VideoCard';

import useVideosByQuery from '../../hooks/useVideosByQuery';
import { useSearch } from '../../hooks/useSearch';

const GridList = styled.div`
  display: grid;
  justify-items: center;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  margin: 20px;
`;

function HomePage() {
  // const history = useHistory();
  const sectionRef = useRef(null);
  // const { authenticated, logout } = useAuth();

  // function deAuthenticate(event) {
  //   event.preventDefault();
  //   logout();
  //   history.push('/');
  // }
  const { search } = useSearch()
  const [, videos] = useVideosByQuery(search)

  return (
    <section className="homepage" ref={sectionRef}>
      <h1>Welcome to the Challenge!</h1>
      {/* {authenticated ? (
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
        <Link to="/login">let me in →</Link>
      )} */}

      <GridList>
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </GridList>
    </section>
  );
}

export default HomePage;
