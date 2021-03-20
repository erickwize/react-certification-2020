import React from 'react';
import videos from '../../mockFiles/mock.json';
import VideoBox from './VideoBox/VideoBox.component';
import './VideoGrid.styles.css';

export default function VideoGrid(){
    return(
        <span className="videoGrid">
            {
                videos.items.map(element => 
                  <VideoBox 
                    bigImage={element.snippet.thumbnails.medium.url} 
                    key={element.etag}
                    title={element.snippet.title}
                    description={element.snippet.description}
                    />
                )
            }
        </span>
    );
}