import React from 'react';
import { useStore } from '../../store/StoreProvider';
import VideoGrid from './VideoGrid/VideoGrid';
import VideoDetails from './VideoDetails/VideoDetails';


const VideosSpace = () => {
    const {section} = useStore();
    const {main, videoId} = section;
    return(
        <div>
        {
            main 
            ? <VideoGrid/>
            : <VideoDetails videoId={videoId}/>
        }
        </div>
    );
}

export default VideosSpace;