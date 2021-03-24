import React from 'react';
import videos from '../../youtube-videos-mock.json';
import VideoCard from '../../components/VideoCard';
import { Container, Title, VideoGrid } from './Home.styles';
import './Home.styles.js';

function HomePage() {
  
  const { items = [] } = videos;

  const videosList = items.map((video) => {
    const {
      etag,
      snippet: {
        title,
        description,
        thumbnails: {
          medium: { url, width, height },
        },
      },
    } = video;
    return <VideoCard key={etag}
      title={title}
      description={description}
      image={url}
      width={width}
      height={height}
    />;
  });

  return (
    <Container>
      <Title>Mini Challenge 1</Title>
      <VideoGrid>{videosList}</VideoGrid>
    </Container>
  );
}

export default HomePage;
