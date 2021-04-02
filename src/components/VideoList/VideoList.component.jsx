import React from 'react';
import VideoItem from '../VideoItem';

import './VideoList.styles.css';

function VideoList(props) {
  const videos = props.videos ? props.videos : [];
  const filteredResults = videos.filter((item) => item.id.kind === 'youtube#video');
  const items = filteredResults.map((item) => (
    <VideoItem video={item} videos={filteredResults} />
  ));
  return <div className="video-list">{items}</div>;
}

export default VideoList;
