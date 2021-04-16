import React, { useState } from 'react';
import { useStore } from '../../../../store/StoreProvider';
import './FooterVideo.styles.css';

const FooterVideo = props => {
    const store = useStore();
    const { videoDetails, theme } = store;
    const [showDescription, setShowDescription] = useState(false);
    

    const showFullDescription = () => {
        if(showDescription){
            setShowDescription(false);
        }else{
            setShowDescription(true);
        }
    }
    return(
        <span className="videoDetailsHolder">  
            <span className={`FVTitle ${theme === "light"?"colorBlack":"colorWhite"}`}>{videoDetails.title}</span>
            <hr className={`FVHR ${theme === "light"?"colorBlack":"colorWhite"}`}/>
            <div className={`FVheading ${theme === "light"?"colorBlack":"colorWhite"}`}>
                <span className={`FVChannel ${theme === "light"?"colorBlack":"colorWhite"}`}>{videoDetails.channel}</span>
                <span className={`FVPublished ${theme === "light"?"colorBlack":"colorWhite"}`}>{`${videoDetails.published.slice(0,10)} at ${videoDetails.published.slice(11,16)}`}</span>
            </div>
            <span className={`FVDescription ${theme === "light"?"colorBlack":"colorWhite"}`}>{videoDetails.description.slice(0,300)}
            {showDescription?<span className={`FVDescription2 ${theme === "light"?"colorBlack":"colorWhite"}`}>{videoDetails.description.slice(300,1500)}</span>:null}
            <span className={`FVSeeMore ${theme === "light"?"colorBlue":"colorSkyBlue"}`} onClick={showFullDescription}>{showDescription?"     see less":"... see more"}</span></span>
        </span>
    );
}

export default FooterVideo;