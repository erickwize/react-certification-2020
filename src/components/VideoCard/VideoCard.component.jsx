import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  VideoCardWrapper,
  Thumbnail,
  VideoTitle,
  VideoOverlay,
  VideoDescription,
  VideoInfo,
} from './VideoCard.styles';

function VideoCard({ videoData, cardClick }) {
  const [descVisible, setDescVisible] = useState(false);

  return (
    <Link to={`/player/${videoData.videoId}`}>
      <VideoCardWrapper data-testid="yt-videocard" onClick={() => cardClick(videoData)}>
        <Thumbnail img={videoData.thumbnail} alt={videoData.title}>
          <VideoOverlay
            onMouseEnter={() => setDescVisible(true)}
            onMouseLeave={() => setDescVisible(false)}
          >
            <VideoDescription
              data-testid="yt-videocard-description"
              visible={descVisible}
            >
              {videoData.description || `Dale click para ver el video ${videoData.title}`}
              <VideoInfo visible={descVisible}>
                {videoData.channel} | {videoData.uploadDate}
              </VideoInfo>
            </VideoDescription>
            <VideoTitle visible={descVisible}>
              {videoData.title.length > 35 && !descVisible
                ? `${videoData.title.substring(0, 34)}...`
                : videoData.title}
            </VideoTitle>
          </VideoOverlay>
        </Thumbnail>
      </VideoCardWrapper>
    </Link>
  );
}

export default VideoCard;
