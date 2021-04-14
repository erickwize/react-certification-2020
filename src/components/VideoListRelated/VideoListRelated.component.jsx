import React, { useContext } from 'react';
import VideoItem from '../VideoItem';
import { Wrapper } from './VideoListRelated.styled';
import { useFetch } from '../../hooks/useFetch';
import { GlobalContext } from '../../context/GlobalContext';

function VideoListRelated() {
  const globalContext = useContext(GlobalContext);
  const { state } = useFetch(globalContext.video.currVid);
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
              <VideoItem item={v} key={v.etag} />
            ))}
          </>
        )}
      </Wrapper>
    </>
  );
}

export default VideoListRelated;

import React, { useContext } from 'react';
import VideoItem from '../VideoItem';
import { Wrapper } from './VideoList.styled';
import { GlobalContext } from '../../context/GlobalContext';

function VideoList({ items }) {
  const globalContext = useContext(GlobalContext);
  
  return (
    <>
      <Wrapper>
        
      </Wrapper>
    </>
  );
}

export default VideoList;
