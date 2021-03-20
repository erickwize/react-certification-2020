import React, { useRef, useEffect } from 'react';
// import { Link, useHistory } from 'react-router-dom';

import { mockVideos } from '../../mockData';
// import { useAuth } from '../../providers/Auth';
import { HomeSection, Title, VideoContainer } from '../../styles/HomeStyle';
import Header from '../../components/Header';
import VideoCard from '../../components/VideoCard';

const wizelineLogo = mockVideos.items.shift();
const videosData = mockVideos;

function HomePage() {
  // const history = useHistory();
  const sectionRef = useRef(null);
  // const { authenticated, logout } = useAuth();

  // function deAuthenticate(event) {
  //   event.preventDefault();
  //   logout();
  //   history.push('/');
  // }

  useEffect(() => {
    console.log(wizelineLogo);
  });

  return (
    <>
      <Header />
      <HomeSection ref={sectionRef}>
        <Title>
          <h1>Enjoy watching!</h1>
        </Title>
        <VideoContainer>
          {videosData.items.map((video) => (
            <VideoCard key={video.etag} data={video} />
          ))}
        </VideoContainer>
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
      </HomeSection>
    </>
  );
}

export default HomePage;
