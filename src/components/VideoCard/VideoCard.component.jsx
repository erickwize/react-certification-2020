import React from 'react';
import { getTimeLapsed } from '../../utils/fns';
import {
  Description,
  Image,
  Text,
  Title,
  Video,
  PublishedDate,
} from './VideoCard.styles';

function VideoCard({ id, title, description, thumbnail, date }) {
  return (
    <Video data-testid={id}>
      <Image style={{ backgroundImage: `url(${thumbnail})` }} />
      <Text>
        <p>
          <Title>{title}</Title>
        </p>
        <p>
          <Description>{description}</Description>
        </p>
        <PublishedDate>{getTimeLapsed(date)}</PublishedDate>
      </Text>
    </Video>
  );
}

export default VideoCard;
