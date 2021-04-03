import React, {useState, createContext} from 'react';

export const DetailsVideoContext = createContext();

export const DetailsVideoProvider = props => {
    const [videoDetails, setVideoDetails] = useState({
        title: "",
        description: "",
        channel: "",
        published: ""
    });

    return(
        <DetailsVideoContext.Provider value={[videoDetails, setVideoDetails]}>
            {props.children}
        </DetailsVideoContext.Provider>
    );
}