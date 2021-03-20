import React, { useRef } from 'react';

import './Home.styles.css';

import VideoPreviewCardList from '../../components/VideoPreview/VideoPreviewCardList';

function HomePage() {
  const sectionRef = useRef(null);

  return (
    <section className="homepage" ref={sectionRef}>
      <VideoPreviewCardList />
    </section>
  );
}

export default HomePage;
