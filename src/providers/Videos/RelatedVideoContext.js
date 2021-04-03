import React, {useState, createContext} from 'react';

export const RelatedVideoContext = createContext();

export const RelatedVideoProvider = props => {
    const [relatedVideos, setRelatedVideos] = useState([]);

    return(
        <RelatedVideoContext.Provider value={[relatedVideos, setRelatedVideos]}>
            {props.children}
        </RelatedVideoContext.Provider>
    );
}