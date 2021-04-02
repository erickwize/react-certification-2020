import React from 'react';
import { Link } from 'react-router-dom';

import './VideoItem.styles.css';

function VideoItem(props) {
  return (
    <div className="video-item">
      <Link
        to={{
          pathname: `/video/${props.video.id.videoId}`,
          state: { video: props.video, videos: props.videos },
        }}
      >
        <div>
          <div className="thumbnail">
            <img src={props.video.snippet.thumbnails.high.url} alt="Video" />
          </div>
          <div className="info">
            <h2>{props.video.snippet.title}</h2>
            <p>{props.video.snippet.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default VideoItem;
