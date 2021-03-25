import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import VideoPlayer from '../../components/VideoPlayer';

const VideoDetails = () => {
  const { id } = useParams();
  const { title } = useLocation().state;

  return (
    <div>
      <h1>Video details view</h1>
      <VideoPlayer channelId={id} title={title} />
    </div>
  );
};

export default VideoDetails;
