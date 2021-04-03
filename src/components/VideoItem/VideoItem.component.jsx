import React from 'react';
import { Wrapper, Title, Thumbnail } from './VideoItem.styled';

function VideoItem({ item, setCurrVid }) {
  const text = item.snippet.title.replace(/&#39;/g, "'");
  const onClickHandler = () => {
    setCurrVid(item);
  };
  return (
    <Wrapper key={item.etag} onClick={onClickHandler}>
      <Thumbnail src={item.snippet.thumbnails.high.url} />
      <Title>{text}</Title>
    </Wrapper>
  );
}

export default VideoItem;
