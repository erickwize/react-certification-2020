import React from 'react';
import styled from 'styled-components';
import Nav from '../../components/Nav';
import VideoCard from '../../components/VideoCard';
import youtubeVideos from '../../mocks/youtube-videos';

import './Home.styles.css';

function HomePage() {
  console.log(youtubeVideos);
  return (
    <>
      <Nav />
      <BodyContainer>
        <h1>Youtube video search app</h1>
        <VideoGrid>
          {youtubeVideos.items.map((obj) => (
            <VideoCard data={obj} />
          ))}
        </VideoGrid>
      </BodyContainer>
    </>
  );
}

export default HomePage;

const BodyContainer = styled.div`
  padding: 5%;

  h1 {
    text-align: center;
    margin: 0px 0px 5% 0px;
    color: #525252;
  }
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
  grid-gap: 50px;
`;
