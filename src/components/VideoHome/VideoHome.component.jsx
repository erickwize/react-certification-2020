import React from 'react';
import VideoItem from '../VideoItem';
import { Wrapper, VideoList } from './VideoHome.styled';
import { ytdata } from '../../ytdata';

function VideoHome({ query }) {
  return (
    <Wrapper>
      <VideoList>
        {ytdata.items
          .filter((item) => item.id.kind === 'youtube#video')
          .filter((item) =>
            (item.snippet.title + item.snippet.description).includes(query)
          )
          .map((v) => (
            <VideoItem value={v} key={v.etag} />
          ))}
      </VideoList>
    </Wrapper>
  );
}

export default VideoHome;
