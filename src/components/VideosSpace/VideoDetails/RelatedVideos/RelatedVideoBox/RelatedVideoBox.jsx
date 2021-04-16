import React from 'react';
import { useDispatch, useStore } from '../../../../../store/StoreProvider';
import { types } from '../../../../../store/StoreReducer';
import './RelatedVideoBox.styles.css';
import key from '../../../../../mockFiles/key.json';

const RelatedVideoBox = props => {
    const dispatch = useDispatch();
    const {theme} = useStore();

    const openVideo = e => {
        dispatch({
            type: types.setSectionToDetails,
            payload: {main: false, videoId: props.videoId}
        })
        getRelatedVideos();
        getDetails();
        getComments();
    }

    const getRelatedVideos = () => {
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${props.videoId}&type=video&maxResults=10&key=${key.key}`)
        .then(resp => resp.json())
        .then(response => dispatch({
            type: types.setRelatedVideos,
            payload: {
                relatedVideos: response.items
            }
        }))
        .catch(error => console.log(error));
    }

    const getDetails = () => {
        fetch(`https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=${props.videoId}&key=${key.key}`)
        .then(resp => resp.json())
        .then(response => dispatch({
            type: types.setVideoDetails,
            payload: {
                title: response.items[0].snippet.title,
                description: response.items[0].snippet.description,
                channel: response.items[0].snippet.channelTitle,
                published: response.items[0].snippet.publishedAt
            }
        }))
        .catch(error => console.log(error))
    }

    const getComments = () => {
        fetch(`https://www.googleapis.com/youtube/v3/commentThreads?key=${key.key}&textFormat=plainText&part=snippet&videoId=${props.videoId}&maxResults=50`)
        .then(resp => resp.json())
        .then(response => dispatch({
            type: types.setComments,
            payload: {
                comments: response.items
            }
        }))
        .catch(error => console.log(error))
    }

    return(
        <span onClick={openVideo} className="relatedVideoBox">
            <img src={props.image} alt={props.altProp}/>
            <span className={`RVBvideoTitle ${theme === "light"?"colorBlack":"colorWhite"}`}>{props.videoTitle}</span>
            <span className={`RVBchannelTitle ${theme === "light"?"colorBlack":"colorWhite"}`}>{props.channelTitle}</span>
        </span>
    );
}

export default RelatedVideoBox;