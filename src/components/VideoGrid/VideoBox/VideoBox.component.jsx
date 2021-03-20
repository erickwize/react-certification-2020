import React from 'react';
import './VideoBox.styles.css';
const VideoBox = (props)=>{
    return(
        <span className="videoBox">
            <span className="imageBox">
                <img src={props.bigImage} alt="holi"/>
            </span>
            <p className="titleSection">{props.title}</p>
            <p className="descSection">{`${props.description}`}</p>
        </span>
    );
}

export default VideoBox;