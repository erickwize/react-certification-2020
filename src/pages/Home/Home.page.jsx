import React from 'react';
import { useHistory } from 'react-router-dom';

import { VideoList, HomeTitle } from './Home.styles';
import VideoCard from '../../components/VideoCard';
import { getUsefullData } from '../../utils/fns';

function HomePage({ selectCard, videoList, dispatch }) {
  const history = useHistory();
  const cardClick = (video) => {
    selectCard(video);
    history.push(`/player/${video.videoId}`);
  };

  return (
    <section data-testid="yt-videocards">
      <HomeTitle>Welcome y&#8217;all!</HomeTitle>
      <p>Search result total: {videoList.length} videos</p>
      <VideoList>
        {videoList.map((video) => (
          <VideoCard
            key={video.etag}
            videoData={getUsefullData(video)}
            cardClick={cardClick}
            dispatch={dispatch}
          />
        ))}
      </VideoList>
    </section>
  );
}

export default HomePage;
