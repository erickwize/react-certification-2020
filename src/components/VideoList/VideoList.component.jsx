import React from 'react';
import VideoItem from '../VideoItem';
import { Wrapper } from './VideoList.styled';

function VideoList({ items, related, favorite }) {
  // console.log('VideoList:related', related);
  // console.log('VideoList:items', items);
  const hasItems = (input) => {
    if (typeof input !== 'undefined' && input !== null && input !== 'undefined') {
      // console.log('VideoList:hasItems\n', items);
      return true;
    }
    return false;
  };
  return (
    <Wrapper>
      {hasItems(items) ? (
        items.map((v) => (
          <VideoItem item={v} key={v.etag} related={related} favorite={favorite} />
        ))
      ) : (
        <p>Empty list</p>
      )}
    </Wrapper>
  );
}

export default VideoList;
