import React, {useContext} from 'react';
import RelatedVideoBox from './RelatedVideoBox/RelatedVideoBox';
import { RelatedVideoContext } from '../../../../providers/Videos/RelatedVideoContext';
import './RelatedVideos.styles.css';

const RelatedVideos = props => {
    const [relatedVideos,] = useContext(RelatedVideoContext);

    return(
        <span className="relatedVideos">
            {relatedVideos.map(element => 
                element ? <RelatedVideoBox
                image={element.snippet.thumbnails.medium.url}
                videoTitle={element.snippet.title}
                channelTitle={element.snippet.channelTitle}
                altProp={element.id.videoId}
                videoId={element.id.videoId}
                key={element.id.videoId}
            /> : null
            )}
        </span>
    );
}

export default RelatedVideos;