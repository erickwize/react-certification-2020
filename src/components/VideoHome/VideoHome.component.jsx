import React from 'react';
import { Wrapper } from './VideoHome.styled';
import { ytdata } from '../../ytdata';
import VideoDetail from '../VideoDetail';
import VideoList from '../VideoList';

function VideoHome({ query, currVid, setCurrVid }) {
  const preprocessResults = (data, source) => {
    switch (source) {
      case 'youtube':
        return {};
      case 'mockdata':
        return data.items
          .filter((item) => item.id.kind === 'youtube#video')
          .filter((item) =>
            (item.snippet.title + item.snippet.description)
              .toLowerCase()
              .includes(query.toLowerCase())
          );
      default:
        return {};
    }
  };
  const hasItems = (input) => {
    return typeof input.id !== 'undefined';
  };

  return (
    <Wrapper>
      {hasItems(currVid) && <VideoDetail currVid={currVid} />}
      <VideoList items={preprocessResults(ytdata, 'mockdata')} setCurrVid={setCurrVid} />
    </Wrapper>
  );
}

export default VideoHome;
