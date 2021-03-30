import React from 'react';
import { VideoCard } from '../../components/molecules';
import youtubeVideosData from '../../mockData/youtube-videos-mock.json';

import { Home, HomeTitle, VideoList } from './Home.styles.js';

const HomePage = () => {
  const videoItems = youtubeVideosData.items;
  console.log('ITEMS:', videoItems[0].snippet.thumbnails.medium.url);
  const videoList = videoItems.map((video) => (
    <VideoCard key={video.etag} videos={video} />
  ));

  return (
    <>
      <Home>
        <HomeTitle>Hello, Hello, Hello!</HomeTitle>
        <VideoList>{videoList}</VideoList>
      </Home>
    </>
  );
};

export default HomePage;
