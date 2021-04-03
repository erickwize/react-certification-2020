import React, {useContext} from 'react';
import { SectionContext } from '../../../../providers/Section/SectionContext';
import { RelatedVideoContext } from '../../../../providers/Videos/RelatedVideoContext';
import { DetailsVideoContext } from '../../../../providers/Videos/DetailsVideoContext';

import './VideoBox.styles.css';
const VideoBox = (props)=>{
    const [, setSection] = useContext(SectionContext);
    const [, setRelatedVideos] = useContext(RelatedVideoContext);
    const [, setVideoDetails] = useContext(DetailsVideoContext);

    const openVideo = e => {
        setSection(() => 
        ({main: false, videoId: props.videoId}))
        getRelatedVideos();
        getDetails();
    }

    const getRelatedVideos = () => {
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${props.videoId}&type=video&maxResults=10&key=AIzaSyCGgacaXWGPF-AGRR2HVyIccNQGk92O9oo`)
        .then(resp => resp.json())
        .then(response => setRelatedVideos(response.items))
        .catch(error => console.log(error));
    }

    const getDetails = () => {
        fetch(`https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=${props.videoId}&key=AIzaSyCGgacaXWGPF-AGRR2HVyIccNQGk92O9oo`)
        .then(resp => resp.json())
        .then(response => setVideoDetails(() => 
        ({
            title: response.items[0].snippet.title,
            description: response.items[0].snippet.description,
            channel: response.items[0].snippet.channelTitle,
            published: response.items[0].snippet.publishedAt
        })
        ))
    }

    return(
        <span className="videoBox" onClick={openVideo}>
            <span className="imageBox">
                <img src={props.bigImage} alt="holi"/>
            </span>
            <p className="titleSection">{props.title}</p>
            <p className="descSection">{`${props.description}`}</p>
        </span>
    );
}

export default VideoBox;