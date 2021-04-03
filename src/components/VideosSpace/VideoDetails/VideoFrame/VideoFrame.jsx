import React from 'react';
import './VideoFrame.styles.css';

const VideoFrame = (props) => {
    const url = `http://www.youtube.com/embed/${props.videoId}`;
    return(
        <iframe
            title={props.videoId}
            className="videoFrame"
            width="420"
            height="315"
            src={url}
            frameBorder="0"
            allowFullScreen
        >
        </iframe>
        
    );
}

export default VideoFrame;