import React from 'react';
import styled from 'styled-components';
import VideoItem from '../VideoItem';
import { ytdata } from '../../ytdata';

const Wrapper = styled.div`
  display: inline-block;
`;
const VideoList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

function VideoHome() {
  return (
    <Wrapper>
      <VideoList>
        {ytdata.items
          .filter((item) => item.id.kind === 'youtube#video')
          .map((v) => (
            <VideoItem value={v} key={v.etag} />
          ))}
      </VideoList>
    </Wrapper>
  );
}

export default VideoHome;
