import React from 'react';
import { useDispatch, useStore } from '../../../../../store/StoreProvider';
import { openSelectedVideo } from '../../../../../store/dispatchCalls';
import './RelatedVideoBox.styles.css';

const RelatedVideoBox = props => {
    const dispatch = useDispatch();
    const {theme} = useStore();
    const {videoId, imageUrl, altProp, videoTitle, channelTitle} = props;

    const openVideo = () => openSelectedVideo(dispatch, videoId, imageUrl);
    
    return(
        <span onClick={openVideo} className="relatedVideoBox">
            <img src={imageUrl} alt={altProp}/>
            <span className={`RVBvideoTitle ${theme === "light"?"colorBlack":"colorWhite"}`}>{videoTitle}</span>
            <span className={`RVBchannelTitle ${theme === "light"?"colorBlack":"colorWhite"}`}>{channelTitle}</span>
        </span>
    );
}

export default RelatedVideoBox;