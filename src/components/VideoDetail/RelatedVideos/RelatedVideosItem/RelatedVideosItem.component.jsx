import React from 'react';
import { VideoRelated, Thumbnail, Subcontainer, Title, ChannelAndDatePublished } from './RelatedVideosItem.styles';
import { parseDatetime } from '../../../../utils/parseDatetime';
import { useGlobal } from '../../../../providers/Global.provider';

export const RelatedVideosItem = ({video}) => {

    const { state, dispatch } = useGlobal();

    return <VideoRelated onClick={()=>dispatch({type:'closeMenu'})}>
        {
            video.hasOwnProperty("snippet") &&
            <>
                <Thumbnail src={video.snippet.thumbnails.medium.url}></Thumbnail>
                <Subcontainer>
                    <Title theme={state.theme}>{video.snippet.title}</Title>
                    <ChannelAndDatePublished theme={state.theme}>{`${video.snippet.channelTitle} • ${parseDatetime(video.snippet.publishedAt)}`}</ChannelAndDatePublished>            
                </Subcontainer>
            </>
        }
    </VideoRelated>
};