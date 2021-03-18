import React from 'react';
/* import { Header, HeaderWrapper, Menu, Search, HeaderToggleWrapper,
  HeaderToggle, HeaderToggleLabel, LoginMenu } from './VideoCard.styles.js'; */

function VideoCard({ videoData }) {
  console.log(videoData)
  return (
    { if (videoData) {
      return <div>
      <h1>{ videoData.channel }</h1>
      </div>
    }}
  );
}

export default VideoCard;
