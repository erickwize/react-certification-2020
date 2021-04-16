import React, {useContext} from 'react';
import { useStore } from '../../../../store/StoreProvider';
import RelatedVideoBox from './RelatedVideoBox/RelatedVideoBox';
import './RelatedVideos.styles.css';

const RelatedVideos = props => {
    const {relatedVideos} = useStore();

    return(
        <span className="relatedVideos">
            {relatedVideos.map(element => 
                element ? element.snippet ? <RelatedVideoBox
                image={element.snippet.thumbnails.medium.url}
                videoTitle={element.snippet.title}
                channelTitle={element.snippet.channelTitle}
                altProp={element.id.videoId}
                videoId={element.id.videoId}
                key={element.id.videoId}
            /> :null : null
            )}
        </span>
    );
}

export default RelatedVideos;