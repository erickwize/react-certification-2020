import React from 'react';
import VideoItem from '../VideoItem';

import './VideoList.styles.css';

function VideoList(props) {
  const items = props.videos.map((item) => <VideoItem video={item.snippet} />);
  return <div className="video-list">{items}</div>;
}

export default VideoList;
