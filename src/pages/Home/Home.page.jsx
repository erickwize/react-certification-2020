import React, { useState }from 'react';
import VideoCard from '../../components/VideoCard';
import { Container, Title, VideoGrid } from './Home.styles';
import './Home.styles.js';
import useFetch from './../../utils/hooks/useFetch';
import Config from './../../utils/constants';

function HomePage() {

  const { videos, loading } = useFetch(  `${Config.API_URL}search?maxResults=50&part=snippet&q=${'wizeline'}&key=${Config.API_KEY}`);
  const videoList = videos.map((video) => {
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
      <Title>Welcome!</Title>
      <VideoGrid>
        {loading ? <p>loading</p> : videoList}
      </VideoGrid>
    </Container>
  );
}

export default HomePage;
