import React from 'react';

function VideoPlayer({ channelId, title }) {
  return (
    <iframe
      title={title}
      width="677"
      height="381"
      src={`https://www.youtube.com/embed/${channelId}?rel=0&amp;autoplay=1&mute=0`}
      allowFullScreen="true"
    />
  );
}

export default VideoPlayer;
