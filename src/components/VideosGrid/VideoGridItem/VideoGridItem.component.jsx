import React from 'react';
import { CardContainer, VideoThumbnail, VideoInfo, VideoTitle, VideoThumbnailInfo } from './VideoGridItem.styles';
import { parseDatetime } from '../../../utils/parseDatetime';
import { useGlobal } from '../../../providers/Global.provider';

export const VideoGridItem = ({video}) => {
  const { dispatch } = useGlobal();
  return <CardContainer whileTap={{scale:0.9}} whileHover={{scale:1.05}} onClick={()=>dispatch({type:'closeMenu'})}>
        <VideoThumbnail alt="thumbnail" src={video.snippet.thumbnails.high.url}/>
            <VideoInfo>
                <VideoTitle>{video.snippet.title}</VideoTitle>
                <VideoThumbnailInfo>{`${video.snippet.channelTitle} • ${parseDatetime(video.snippet.publishedAt)}`}</VideoThumbnailInfo>
            </VideoInfo>
    </CardContainer>;
}