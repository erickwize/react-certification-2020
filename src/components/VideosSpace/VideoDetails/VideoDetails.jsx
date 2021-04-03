import React from 'react';
import VideoFrame from './VideoFrame/VideoFrame';
import RelatedVideos from './RelatedVideos/RelatedVideos';
import FooterVideo from './FooterVideo/FooterVideo';

const VideoDetails = props => {
    return(
        <>
            <VideoFrame videoId={props.videoId}/>
            <RelatedVideos videoId={props.videoId}/>
            <FooterVideo videoId={props.videoId}/>
        </>
    );

}

export default VideoDetails;

