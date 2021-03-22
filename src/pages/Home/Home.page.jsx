import React, { useRef } from 'react';
import VideoCardList from '../../components/VideoCardList/VideoCardList.component';

import './Home.styles.css';

function HomePage() {
  const sectionRef = useRef(null);

  return (
    <section className="homepage" ref={sectionRef}>
      <VideoCardList />
    </section>
  );
}

export default HomePage;
