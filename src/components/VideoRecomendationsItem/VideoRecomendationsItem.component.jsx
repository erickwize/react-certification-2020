import React from 'react';
import { Link } from 'react-router-dom';

import './VideoRecomendationsItem.styles.css';

function VideoRecomendationsItem(props) {
  return (
    <div>
      <Link
        className="video-recomendations-item"
        to={{
          pathname: `/video/${props.video.id.videoId}`,
          state: { video: props.video, videos: props.videos },
        }}
      >
        <div>
          <img
            src={props.video.snippet.thumbnails.high.url}
            alt={props.video.snippet.title}
          />
        </div>
        <div>
          <h6>{props.video.snippet.title}</h6>
        </div>
      </Link>
    </div>
  );
}

export default VideoRecomendationsItem;
