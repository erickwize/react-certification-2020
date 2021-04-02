import React from 'react';
import { Wrapper, Title, Thumbnail } from './VideoPlayer.styled';

function VideoPlayer({ children, ...rest }) {
  const text = rest.value.snippet.title.replace(/&#39;/g, "'");
  return (
    <Wrapper key={rest.value.etag}>
      <Thumbnail src={rest.value.snippet.thumbnails.high.url} />
      <Title>{text}</Title>
    </Wrapper>
  );
}

export default VideoPlayer;
