import React from 'react';

import './VideoItem.styles.css';

function VideoItem(props) {
  return (
    <div className="video-item">
      <div className="thumbnail">
        <img src={props.video.thumbnails.high.url} alt="Video" />
      </div>
      <div className="info">
        <h2>{props.video.title}</h2>
        <p>{props.video.description}</p>
      </div>
    </div>
  );
}

export default VideoItem;
