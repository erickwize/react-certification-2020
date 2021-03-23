import React from 'react';
import styled from 'styled-components';
import VideoCard from '../VideoCard';
import ChannelCard from '../ChannelCard';

import videos from '../../providers/data/mockData.json';

const Header = styled.h1`
  margin: 0px 100px;
  text-align: start;
`;

const channelList = videos.items
  .filter((e) => e.id.kind.includes('channel'))
  .map((video) => {
    const {
      snippet: { title, description, thumbnails },
    } = video;

    return (
      <ChannelCard
        title={title}
        description={description}
        thumbnail={thumbnails.medium.url}
        key={video.etag}
      />
    );
  });

const videoList = videos.items
  .filter((e) => e.id.kind.includes('video'))
  .map((video) => {
    const {
      snippet: { title, description, thumbnails },
    } = video;

    return (
      <VideoCard
        title={title}
        description={description}
        thumbnail={thumbnails.medium.url}
        key={video.etag}
      />
    );
  });

function VideoCardList() {
  return (
    <div>
      {channelList.length > 0 ? (
        <>
          <Header>Channels</Header>
          <div>{channelList}</div>
          <hr />
        </>
      ) : (
        <></>
      )}
      {videoList.length > 0 ? (
        <>
          <Header>Videos</Header>
          <div>{videoList}</div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default VideoCardList;
