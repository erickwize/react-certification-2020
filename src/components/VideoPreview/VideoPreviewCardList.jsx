import React from 'react';
import VideoPreviewCard from './VideoPreviewCard';

import videosList from '../../data/youtube-videos-mock.json';

function VideoPreviewCardList() {
  return (
    <div>
      <div className="row">
        {videosList.items.map((video) => (
          <div className="col-sm-4">
            <VideoPreviewCard
              title={video.snippet.title}
              description={video.snippet.description}
              channelTitle={video.snippet.channelTitle}
              publishTime={video.snippet.publishTime}
              image={video.snippet.thumbnails.medium.url}
            />
          </div>
        ))}
      </div>{' '}
    </div>
  );
}

export default VideoPreviewCardList;
