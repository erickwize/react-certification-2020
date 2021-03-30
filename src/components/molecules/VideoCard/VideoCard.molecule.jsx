import React from 'react';
import { CardContainer, TextContainer } from './VideoCard.styles';
import { Thumbnail, VideoInformation } from '../../atoms';

function VideoCard({ videos }) {
  return (
    <CardContainer>
      <Thumbnail bg={<img src={videos.snippet.thumbnails.medium.url} />} />
      <TextContainer>
        <VideoInformation
          title={videos.snippet.title}
          description={videos.snippet.description}
        />
      </TextContainer>
    </CardContainer>
  );
}

export default VideoCard;
