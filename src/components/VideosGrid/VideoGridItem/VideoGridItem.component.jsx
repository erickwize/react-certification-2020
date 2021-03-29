import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';

const CardContainer = styled(motion.div)`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    margin: 10px;
    max-width: 340px;
    min-width: 340px;
    max-height: 280px;
    min-height: 280px;
    text-align: left;
`;

const VideoThumbnail = styled.img`
    max-height: 180px;
    object-fit: cover;
`;

const VideoInfo = styled.div`
    background-color: transparent;
`;

const VideoTitle = styled.p`
    font-size: 20px;
    font-weight: bold;
    line-height: 20px;
    margin: 10px 0 0 0px;
    min-height: 40px;
    max-height: 40px;
    overflow: hidden;
`;

const VideoThumbnailInfo = styled.p`
    color: #919191;
    margin: 10px 0 0 0px;
`;

export const parseDatetime = (datetime) => {
    const original = new Date(datetime);
    const formatted = new Intl.DateTimeFormat('es', {
        year: 'numeric',
        month:'short',
        day: '2-digit',
        timeZone: 'UTC'
    }).format(original);
    return formatted;
};

export const VideoGridItem = ({video}) => {
  return <CardContainer whileTap={{scale:0.9}}>
        <VideoThumbnail alt="thumbnail" src={video.snippet.thumbnails.high.url}/>
            <VideoInfo>
                <VideoTitle>{video.snippet.title}</VideoTitle>
                <VideoThumbnailInfo>{`${video.snippet.channelTitle} • ${parseDatetime(video.snippet.publishedAt)}`}</VideoThumbnailInfo>
            </VideoInfo>
    </CardContainer>;
}