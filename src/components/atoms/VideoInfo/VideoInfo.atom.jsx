import React from 'react';
import { VideoDescription, VideoInfo, VideoTitle } from './VideoInfo.styles';

const VideoInformation = ({ title = null, description = null }) => {
  return (
    <VideoInfo>
      <VideoTitle>{title}</VideoTitle>
      <VideoDescription>{description}</VideoDescription>
    </VideoInfo>
  );
};

export default VideoInformation;
