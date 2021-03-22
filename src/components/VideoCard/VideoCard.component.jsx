import React from 'react';

import './VideoCard.styles.css';

function VideoCard({ title, description, thumbnail }) {
  return (
    <div className="video-card">
      <div className="img-video" style={{ backgroundImage: `url(${thumbnail})` }} />
      <div className="text">
        <p>
          <strong>{title}</strong>
        </p>
        <p>
          <small>{description}</small>
        </p>
      </div>
    </div>
  );
}

export default VideoCard;
