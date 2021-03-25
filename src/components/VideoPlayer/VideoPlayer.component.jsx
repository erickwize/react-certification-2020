import React from 'react';

function VideoPlayer({ channelId, title }) {
  return (
    <iframe
      title={title}
      width="420"
      height="345"
      src={`https://www.youtube.com/embed/${channelId}`}
    />
  );
}

export default VideoPlayer;
