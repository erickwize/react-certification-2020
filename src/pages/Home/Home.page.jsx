import React, { useRef } from 'react';
import { Content } from './Home.styled';
import Header from '../../components/Header';
import VideoHome from '../../components/VideoHome';

import './Home.styles.css';

function HomePage() {
  const sectionRef = useRef(null);

  return (
    <section className="homepage" ref={sectionRef}>
      <Header />
      <Content>
        <VideoHome />
      </Content>
    </section>
  );
}

export default HomePage;
