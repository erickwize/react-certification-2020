import React, { useContext } from 'react';
import VideoGrid from './VideoGrid/VideoGrid';
import VideoDetails from './VideoDetails/VideoDetails';
import { SectionContext } from '../../providers/Section/SectionContext';
import { DetailsVideoProvider } from '../../providers/Videos/DetailsVideoContext';

const VideosSpace = () => {
    const [section,] = useContext(SectionContext);
    const {main, videoId} = section;
    return(
        <div>
        {
            main 
            ? <DetailsVideoProvider> <VideoGrid/> </DetailsVideoProvider> 
            : <DetailsVideoProvider> <VideoDetails videoId={videoId}/> </DetailsVideoProvider>
        }
        </div>
    );
}

export default VideosSpace;