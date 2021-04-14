import React, { useContext } from 'react';
import { Wrapper } from './VideoHome.styled';
import { ytdata } from '../../ytdata';
import { GlobalContext } from '../../context/GlobalContext';
import VideoDetail from '../VideoDetail';
import VideoList from '../VideoList';

function VideoHome() {
  const globalContext = useContext(GlobalContext);
  const preprocessResults = (data, source) => {
    switch (source) {
      case 'youtube':
        return {};
      case 'mockdata':
        console.log('VideoHome:search', globalContext.search);
        return data.items
          .filter((item) => item.id.kind === 'youtube#video')
          .filter((item) =>
            (item.snippet.title + item.snippet.description)
              .toLowerCase()
              .includes(globalContext.search.query.toLowerCase())
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
      {hasItems(globalContext.video.currVid) && <VideoDetail />}
      <VideoList items={preprocessResults(ytdata, 'mockdata')} />
      <p>{globalContext.theme.colors.background}</p>
      <p>{globalContext.theme.colors.text}</p>
    </Wrapper>
  );
}

export default VideoHome;
