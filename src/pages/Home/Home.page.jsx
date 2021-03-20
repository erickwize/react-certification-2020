import React from 'react';
import VideoCards from '../../components/Video/VideoCards.component';
import './Home.styles.css';

function HomePage() {

  return (
    <section data-testid="homepage" className="homepage">
      <h1>Hello stranger!</h1>
      <VideoCards/>
    </section>
  );
}

export default HomePage;
