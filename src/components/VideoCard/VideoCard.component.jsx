import React from 'react';
import { VideoCardWrapper, Thumbnail, VideoTitle, VideoChannel, UploadDate,
 VideoCardInfo, VideoDescription } from './VideoCard.styles.js';

function VideoCard({ videoData }) {
  return (
    <VideoCardWrapper>
      <Thumbnail img={videoData.thumbnail} alt={videoData.title}/>
      <VideoCardInfo>
        <VideoTitle>{ videoData.title }</VideoTitle>
        <VideoChannel>{ videoData.channel }
          <UploadDate>{ `|  ${videoData.uploadDate}` } </UploadDate>
        </VideoChannel>
          <VideoDescription>{ videoData.description }</VideoDescription>
      </VideoCardInfo>
   </VideoCardWrapper>
  );
}

export default VideoCard;
