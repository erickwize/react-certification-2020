import React from 'react';

import './VideoPlayer.styles.css';

function VideoPlayer(props) {
  return (
    <div className="video-player">
      <iframe
        className="video-youtube"
        allowFullScreen
        frameBorder="0"
        title={props.video.snippet.title}
        src={`https://www.youtube.com/embed/${props.video.id.videoId}?controls=0&autoplay=0`}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      />
      <div className="video-info">
        <h2>{props.video.snippet.title}</h2>
        <p>{props.video.snippet.description}</p>
      </div>
    </div>
  );
}

export default VideoPlayer;
