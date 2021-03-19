import React, { useRef } from 'react';
import './Home.styles.css';

function HomePage() {
  const sectionRef = useRef(null);



  return (
    <section className="homepage" ref={sectionRef}>
      <div className="container">
        <h1>Video Viewer</h1>
      </div>
    </section>
  );
}

export default HomePage;
