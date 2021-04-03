import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { VideosGrid } from '../../components/VideosGrid/VideosGrid.component';
import { useFetchVideos } from '../../utils/hooks/useFetchVideos';

import { useAuth } from '../../providers/Auth';
import './Home.styles.css';

function HomePage({searchValue, setSelectedVideo}) {

  const {videos: data, loading} = useFetchVideos(searchValue);

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
      {loading && <p>Loading</p>}
      {!loading && <VideosGrid data={data} setSelectedVideo={setSelectedVideo}/>}
      
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
      
    <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a></div>
    <div>Icons made by <a href="https://icon54.com/" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </section>
  );
}

export default HomePage;
