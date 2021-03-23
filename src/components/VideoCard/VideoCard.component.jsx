import React from 'react';

import { Description, Image, Text, Title, Video } from './VideoCard.styles';

function VideoCard({ title, description, thumbnail }) {
  return (
    <Video>
      <Image style={{ backgroundImage: `url(${thumbnail})` }} />
      <Text>
        <p>
          <Title>{title}</Title>
        </p>
        <p>
          <Description>{description}</Description>
        </p>
      </Text>
    </Video>
  );
}

export default VideoCard;
