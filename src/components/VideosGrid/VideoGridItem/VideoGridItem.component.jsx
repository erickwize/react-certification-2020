import React from 'react';
import { CardContainer, VideoThumbnail, VideoInfo, VideoTitle, VideoThumbnailInfo } from './VideoGridItem.styles';
import { parseDatetime } from '../../../utils/parseDatetime';

export const VideoGridItem = ({video}) => {
  return <CardContainer whileTap={{scale:0.9}} whileHover={{scale:1.05}}>
        <VideoThumbnail alt="thumbnail" src={video.snippet.thumbnails.high.url}/>
            <VideoInfo>
                <VideoTitle>{video.snippet.title}</VideoTitle>
                <VideoThumbnailInfo>{`${video.snippet.channelTitle} • ${parseDatetime(video.snippet.publishedAt)}`}</VideoThumbnailInfo>
            </VideoInfo>
    </CardContainer>;
}