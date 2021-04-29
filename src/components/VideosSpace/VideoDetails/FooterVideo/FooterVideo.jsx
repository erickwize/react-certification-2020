import React, { useState } from 'react';
import { useStore, useDispatch } from '../../../../store/StoreProvider';
import {types} from '../../../../store/StoreReducer';
import './FooterVideo.styles.css';

const FooterVideo = props => {
    const { videoDetails, theme, favoriteVideos } = useStore();
    const dispatch = useDispatch();
    const [showDescription, setShowDescription] = useState(false);
    

    const showFullDescription = () => {
        if(showDescription){
            setShowDescription(false);
        }else{
            setShowDescription(true);
        }
    }

    const addFavoritevideo = () => {
        console.log(favoriteVideos);
        if(!isAdded()){
            console.log(props.imageUrl);
            dispatch({
                type: types.addFavoriteVideo,
                payload: {
                    video: {
                        title: videoDetails.title,
                        description: videoDetails.description,
                        channel: videoDetails.channel,
                        published: videoDetails.published,
                        id: props.videoId,
                        imageUrl: props.imageUrl,
                    }
                }
            })
        }else{
            dispatch({
                type: types.removeFavoriteVideo,
                payload: {
                    videoId: props.videoId
                }
            })
        }
    }

    const isAdded = () => {
        return !(favoriteVideos.filter(video => video.id === props.videoId).length === 0);
    }
    return(
        <span className="videoDetailsHolder">  
            <span className={`FVTitle ${theme === "light"?"colorBlack":"colorWhite"}`}>{videoDetails.title}</span>
            <button onClick={addFavoritevideo}>{isAdded()?"Remove from favorites":"Add to favorites"}</button>
            <hr className={`FVHR ${theme === "light"?"colorBlack":"colorWhite"}`}/>
            <div className={`FVheading ${theme === "light"?"colorBlack":"colorWhite"}`}>
                <span className={`FVChannel ${theme === "light"?"colorBlack":"colorWhite"}`}>{videoDetails.channel}</span>
                <span className={`FVPublished ${theme === "light"?"colorBlack":"colorWhite"}`}>{`${videoDetails.published.slice(0,10)} at ${videoDetails.published.slice(11,16)}`}</span>
            </div>
            <span className={`FVDescription ${theme === "light"?"colorBlack":"colorWhite"}`}>{videoDetails.description.slice(0,300)}
            {showDescription?<span className={`FVDescription2 ${theme === "light"?"colorBlack":"colorWhite"}`}>{videoDetails.description.slice(300,1500)}</span>:null}
            {videoDetails.description.length>300?<span className={`FVSeeMore ${theme === "light"?"colorBlue":"colorSkyBlue"}`} onClick={showFullDescription}>{showDescription?"     see less":"... see more"}</span>:null}</span>
        </span>
    );
}

export default FooterVideo;