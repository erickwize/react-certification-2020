import React from 'react';
import VideoItem from '../VideoItem';
import { Wrapper } from './VideoList.styled';

function VideoList({ items, setCurrVid }) {
  const hasItems = (input) => {
    if (typeof input !== 'undefined' && input !== null && input !== 'undefined') {
      console.log(items);
      return true;
    }
    return false;
  };
  return (
    <>
      <Wrapper>
        {!hasItems(items) && <p>No items found</p>}
        {hasItems(items) && (
          <>
            {items.map((v) => (
              <VideoItem item={v} key={v.etag} setCurrVid={setCurrVid} />
            ))}
          </>
        )}
      </Wrapper>
    </>
  );
}

export default VideoList;
