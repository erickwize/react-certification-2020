import React from 'react';

import './ChannelCard.styles.css';

function ChannelCard({ title, description, thumbnail }) {
  return (
    <div className="channel-card">
      <div className="cardContent">
        <div className="img-channel" style={{ backgroundImage: `url(${thumbnail})` }} />
        <div className="text">
          <p>
            <strong>{title}</strong>
          </p>
          <p>
            <small>{description}</small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChannelCard;
