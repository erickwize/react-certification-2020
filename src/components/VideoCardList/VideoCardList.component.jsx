import React from 'react';
import VideoCard from '../VideoCard';
import ChannelCard from '../ChannelCard';

import videos from '../../providers/data/mockData.json';
import './VideoCardList.css';

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
    <div className="itemList">
      {channelList.length > 0 ? (
        <>
          <h1 className="resultsHeader">Channels</h1>
          <div>{channelList}</div>
          <hr />
        </>
      ) : (
        <></>
      )}
      {videoList.length > 0 ? (
        <>
          <h1 className="resultsHeader">Videos</h1>
          <div>{videoList}</div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default VideoCardList;
