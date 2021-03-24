import React from 'react';
import { Image, Title, Container, Description } from './VideoCard.styles';

const VideoCard = ({ title, description, image, width, height }) => {
  return (
    <Container>
      <Image image={image} width={width} height={height} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

export default VideoCard;
