import React from 'react';

import './VideoPlayer.styles.css';

function VideoPlayer({ video }) {
  return (
    <section className="view-player">
      <h2>{video.title}</h2>
      <h3>{video.description}</h3>

      <iframe
        width="560"
        height="315"
        src={video.link}
        title={video.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </section>
  );
}

export default VideoPlayer;
