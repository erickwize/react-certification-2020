import React from 'react';
import { useLocation } from 'react-router-dom';
import VideoPlayer from '../../components/VideoPlayer';
import VideoRecomendationsList from '../../components/VideoRecomendationsList';

import './VideoDetail.styles.css';

function VideoDetail() {
  const { state } = useLocation();
  return (
    <div className="video-detail">
      <VideoPlayer video={state.video} />
      <VideoRecomendationsList videos={state.videos} />
    </div>
  );
}

export default VideoDetail;
