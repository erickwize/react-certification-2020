import React from 'react';
import NavBar from '../../components/NavBar/Navbar';
import VideosSpace from '../../components/VideosSpace/VideosSpace';
import './Home.styles.css';

function HomePage() {
  return (
    <section className="homepage">  
      <NavBar/>
      <VideosSpace/>
    </section>
  );
}

export default HomePage;
