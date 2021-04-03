import React from 'react';
import VideoItem from '../VideoItem';
import { Wrapper } from './VideoListRelated.styled';
import { useFetch } from '../../hooks/useFetch';

function VideoListRelated({ currVid, setCurrVid }) {
  const { url, state } = useFetch(currVid);
  const hasItems = (input) => {
    return typeof input !== 'undefined';
  };
  return (
    <>
      <Wrapper>
        {!hasItems(state.data) && <p>No related items found</p>}
        {hasItems(state.data) && (
          <>
            {console.log('StateData', state.data)}
            {state.data.map((v) => (
              <VideoItem item={v} key={v.etag} setCurrVid={setCurrVid} />
            ))}
          </>
        )}
      </Wrapper>
    </>
  );
}

export default VideoListRelated;
