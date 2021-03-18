import React, { useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';

// import { useAuth } from '../../providers/Auth';
import { VideoList, HomeTitle } from './Home.styles.jsx';
import mock from './mock/mock.json'
import VideoCard from '../../components/VideoCard'

function HomePage() {
  const [videoList, setVideoList] = useState(mock.items)
  /* const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  } */

  const getReadableDate = (timeStamp) => {
    const date = new Date(timeStamp)
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };

    return date.toLocaleDateString(undefined, options)
  }

  const getUsefullData = (videoData, idx) => {
    const { publishedAt, title, channelTitle,
      description, thumbnails } = videoData.snippet
    return {
      uploadDate: getReadableDate(publishedAt),
      thumbnail: thumbnails.medium.url,
      title,
      description,
      channel: channelTitle
    }
  }

  return (
    <section>
    <HomeTitle>
      Welcome y'all!
    </HomeTitle>
    <VideoList>
    {videoList.map((video, idx) =>
        videoList.length && <VideoCard key={video.etag}
                  videoData={getUsefullData(video, idx)} />
      )}
    </VideoList>
    </section>
    /* <section className="homepage" ref={sectionRef}>
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
        <Link to="/login">let me in →</Link>
      )}
    </section> */
  );
}

export default HomePage;
