import React, { useRef } from 'react';
// import { Link, useHistory } from 'react-router-dom';

// import { useAuth } from '../../providers/Auth';
import { HomeSection, Title, VideoContainer } from './Home.styled';
import { VideoCard } from '../../components';
import { useGlobalProvider } from '../../store/global/Global.provider';

function HomePage() {
  const sectionRef = useRef(null);
  const {
    state: { fetchingVideo, videoList, error },
  } = useGlobalProvider();
  // const history = useHistory();
  // const { authenticated, logout } = useAuth();

  // function deAuthenticate(event) {
  //   event.preventDefault();
  //   logout();
  //   history.push('/');
  // }

  if (fetchingVideo) return <>Loading...</>;

  if (error) return <>Network error</>;

  return (
    <>
      <HomeSection ref={sectionRef}>
        <Title>
          <h1>Enjoy watching!</h1>
        </Title>
        <VideoContainer>
          {videoList?.items?.length > 0 &&
            videoList.items.map((video) => (
              <VideoCard key={video.etag} data={video} videoList={videoList} />
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
