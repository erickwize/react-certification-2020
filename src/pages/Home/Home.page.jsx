import React from 'react';
import styled from 'styled-components';
import Nav from '../../components/Nav';
import VideoCard from '../../components/VideoCard';
import youtubeVideos from '../../mocks/youtube-videos';

function HomePage() {
  return (
    <>
      <Nav />
      <BodyContainer>
        <h1>YouTube video search app</h1>
        <VideoGrid>
          {youtubeVideos.items
            .filter((obj) => obj.id.videoId && true)
            .map((obj) => (
              <VideoCard key={obj.id.videoId} data={obj} />
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
  grid-template-columns: repeat(auto-fill, minmax(14em, 1fr));
  grid-gap: 2.5em;
  @media screen and (max-width: 750px) {
    grid-gap: 1.5em;
  }
`;
