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
        // console.log('VideoHome:search', globalContext);
        return data.items
          .filter((item) => item.id.kind === 'youtube#video')
          .filter((item) =>
            (item.snippet.title + item.snippet.description)
              .toLowerCase()
              .includes(globalContext.query.toLowerCase())
          );
      default:
        return {};
    }
  };

  return (
    <Wrapper>
      {globalContext.vidId && <VideoDetail />}
      <VideoList items={preprocessResults(ytdata, 'mockdata')} />
      <p>{globalContext.colors.background}</p>
      <p>{globalContext.colors.text}</p>
    </Wrapper>
  );
}

export default VideoHome;
