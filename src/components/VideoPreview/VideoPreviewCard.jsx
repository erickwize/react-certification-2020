import React from 'react';

function VideoPreviewCard({ title, description, channelTitle, publishTime }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{channelTitle}</h6>
        <p className="card-text">{description}</p>
        <p className="card-link">{publishTime}</p>
      </div>
    </div>
  );
}

export default VideoPreviewCard;
