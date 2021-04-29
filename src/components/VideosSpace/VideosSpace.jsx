import React from 'react';
import { useStore } from '../../store/StoreProvider';
import VideoGrid from './VideoGrid/VideoGrid';
import VideoDetails from './VideoDetails/VideoDetails';


const VideosSpace = () => {
    const {section} = useStore();
    const {main, videoId, imageUrl} = section;
    return(
        <div>
        {
            main 
            ? <VideoGrid/>
            : <VideoDetails videoId={videoId} imageUrl={imageUrl}/>
        }
        </div>
    );
}

export default VideosSpace;