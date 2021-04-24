import React, { useState } from 'react';
import VideoCard from '../../components/VideoCard';
import { Container, Title, VideoGrid } from './Home.styles';
import './Home.styles.js';
import useFetch from './../../utils/hooks/useFetch';
import Config from '../../utils/constants';
import { useApp } from '../../providers/App/AppProvider';

function HomePage() {
  const context = useApp();
  const { search } = context;
  const { REACT_APP_API_URL, REACT_APP_API_KEY } = Config;

  const { videos, loading } = useFetch(
    `${REACT_APP_API_URL}search?maxResults=50&part=snippet&q=${search}&key=${REACT_APP_API_KEY}`
  );
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
    return (
      <VideoCard
        key={etag}
        title={title}
        description={description}
        image={url}
        width={width}
        height={height}
      />
    );
  });

  return (
    <Container>
      <Title>Welcome!</Title>
      <VideoGrid>{loading ? <p>loading</p> : videoList}</VideoGrid>
    </Container>
  );
}

export default HomePage;
