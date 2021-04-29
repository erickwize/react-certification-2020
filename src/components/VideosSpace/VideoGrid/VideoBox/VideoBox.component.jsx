import React, {useState, useEffect} from 'react';
import { useDispatch, useStore } from '../../../../store/StoreProvider';
import { openSelectedVideo, getStatisticsById } from '../../../../store/dispatchCalls';
import { convertStatisticTo4Digits, cleanRegex } from '../../../../utils/miscelaneous';
import Moment from 'react-moment';
import './VideoBox.styles.css';

const VideoBox = (props)=>{
    const {videoId, bigImage, title, description, channel} = props;
    const [state, setState] =  useState({ likeCount: "0", dislikeCount: "0", viewCount: "0", commentCount: "0"});
    const {likeCount, dislikeCount, viewCount, commentCount} = state;
    const dispatch = useDispatch();
    const { theme } = useStore();

    useEffect(() => {
        getStatisticsById(videoId, setState)
    }, [videoId])

    const openVideo = () => openSelectedVideo(dispatch, videoId, bigImage);

    return(
        <span className={`videoBox ${theme === "light"?"colorAqua":"colorSemiGray"}`} onClick={openVideo}>
            <span className="imageBox">
                <img src={bigImage} alt="holi"/>
            </span>
            <p className={`titleSection ${theme === "light"?"colorBlack":"colorGray"}`}>{`${cleanRegex(title)}`}</p>
            <div className={`VBadditional  ${theme === "light"?"colorBlack":"colorGray"}`}>
                <div className="statistics">
                <span className="likeCount"><i className="far fa-thumbs-up"></i> {likeCount?convertStatisticTo4Digits(likeCount):"0"}</span>
                <span className="dislikeCount"><i className="far fa-thumbs-down"></i> {dislikeCount?convertStatisticTo4Digits(dislikeCount):"0"}</span>
                <span className="viewCount"><i className="fas fa-eye"></i> {viewCount?convertStatisticTo4Digits(viewCount):"0"}</span>
                <span className="commentCount"><i className="far fa-comment"></i> {commentCount?convertStatisticTo4Digits(commentCount):"0"}</span>
                </div>
                <span className="channel">{channel}</span>
                <Moment className={`commentpublished ${theme === "light"?"colorBlack":"colorGray"}`} fromNow>{`${props.published.slice(0,16)}-0000`}</Moment>
            </div>
            <p className={`descSection ${theme === "light"?"colorBlack":"colorWhite"}`}>{`${description}`}</p>
        </span>
    );
}

export default VideoBox;