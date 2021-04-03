import React, { useContext } from 'react';
import { DetailsVideoContext } from '../../../../providers/Videos/DetailsVideoContext';
import './FooterVideo.styles.css';

const FooterVideo = props => {
    const [videoDetails,] = useContext(DetailsVideoContext)

    return(
        <span className="videoDetailsHolder">  
            <span className="FVTitle">{videoDetails.title}</span>`
            <span className="FVPublished">{videoDetails.published}</span>
            <span className="FVChannel">{videoDetails.channel}</span>
            <span className="FVDescription">{videoDetails.description}</span>
        </span>
    );
}

export default FooterVideo;