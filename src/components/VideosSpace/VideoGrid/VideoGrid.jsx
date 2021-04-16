import React, { useContext } from 'react';
import { useStore } from '../../../store/StoreProvider';
import VideoBox from './VideoBox/VideoBox.component';
import './VideoGrid.styles.css';

export default function VideoGrid(){
    const { videos } = useStore();
    
    return(
        <span className="videoGrid">
            {
                videos.map(element => 
                  <VideoBox 
                    bigImage={element.snippet.thumbnails.medium.url} 
                    key={element.id.videoId}
                    videoId={element.id.videoId}
                    title={element.snippet.title}
                    description={element.snippet.description}
                    />
                )
            }
        </span>
    );
}