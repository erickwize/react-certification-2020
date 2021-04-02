import React from 'react';
import VideoList from '../../components/VideoList';
import Loading from '../../components/Loading';

import './Home.styles.css';

function HomePage(props) {
  return (
    <section className="homepage">
      {props.isLoading ? (
        <Loading />
      ) : (
        <div>
          <div>
            <h1>Welcome to the Challenge!</h1>
          </div>
          <VideoList videos={props.videos} />
        </div>
      )}
    </section>
  );
}

export default HomePage;
