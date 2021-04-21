import React, { useContext } from 'react';
import { Wrapper, Title, Thumbnail } from './VideoItem.styled';
import { GlobalContext } from '../../context/GlobalContext';

function VideoItem({ item }) {
  const globalContext = useContext(GlobalContext);
  const text = item.snippet.title.replace(/&#39;/g, "'");
  const onClickHandler = () => {
    console.log('VideoItem:onClickHandler', item);
    globalContext.setVidObject(item);
    globalContext.setVidId(item.id.videoId);
  };
  return (
    <Wrapper key={item.etag} onClick={onClickHandler}>
      <Thumbnail src={item.snippet.thumbnails.high.url} />
      <Title>{text}</Title>
    </Wrapper>
  );
}

export default VideoItem;
