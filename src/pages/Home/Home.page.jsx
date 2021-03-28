import React from 'react';
import VideoList from '../../components/VideoList';

import { mockData } from '../../assets/data/mock-videos';

import './Home.styles.css';

function HomePage() {
  return (
    <section className="homepage">
      <div>
        <h1>Welcome to the Challenge!</h1>
      </div>
      <VideoList videos={mockData.items} />
    </section>
  );
}

export default HomePage;
