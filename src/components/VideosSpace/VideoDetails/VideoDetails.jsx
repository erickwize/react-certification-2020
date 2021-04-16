import React from 'react';
import VideoFrame from './VideoFrame/VideoFrame';
import RelatedVideos from './RelatedVideos/RelatedVideos';
import FooterVideo from './FooterVideo/FooterVideo';
import CommentsSection from './CommentsSection/CommentsSection';

const VideoDetails = props => {
    return(
        <div className="videoDetailsContainer">
            <VideoFrame videoId={props.videoId}/>
            <RelatedVideos videoId={props.videoId}/>
            <div className="belowSection">
                <FooterVideo videoId={props.videoId}/>
                <CommentsSection/>
            </div>
        </div>
    );

}

export default VideoDetails;

