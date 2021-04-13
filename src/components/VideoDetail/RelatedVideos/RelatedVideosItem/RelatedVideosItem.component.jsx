import React from 'react';
import { VideoRelated, Thumbnail, Subcontainer, Title, ChannelAndDatePublished } from './RelatedVideosItem.styles';
import { parseDatetime } from '../../../../utils/parseDatetime';

export const RelatedVideosItem = ({video}) => {
    return <VideoRelated>
        {
            video.hasOwnProperty("snippet") &&
            <>
                <Thumbnail src={video.snippet.thumbnails.medium.url}></Thumbnail>
                <Subcontainer>
                    <Title>{video.snippet.title}</Title>
                    <ChannelAndDatePublished>{`${video.snippet.channelTitle} • ${parseDatetime(video.snippet.publishedAt)}`}</ChannelAndDatePublished>            
                </Subcontainer>
            </>
        }
    </VideoRelated>
};