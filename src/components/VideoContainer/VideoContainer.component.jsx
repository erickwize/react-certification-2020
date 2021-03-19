import React from 'react';
import VideoItem from '../VideoItem';

import './VideoContainer.styles.css';

function VideoContainer(props) {
  const items = props.videos.map( (item) => (
    <VideoItem video={item.snippet} />
))
  return(
    <div className='video-container'> 
      {items}
    </div>
  );
}

export default VideoContainer;
