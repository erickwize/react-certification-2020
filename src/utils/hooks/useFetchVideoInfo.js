import { useState, useEffect } from 'react';
import { useGapi } from '../../utils/hooks/useGapi';
// const mockData = require('../../mock-data/youtube-video-api.json');

const getRelatedVideos = async(gapi, videoId) =>{
    if(gapi !== null){
        const { body } = await gapi.client.youtube.videos.list({
            "part":[
                "snippet"
            ],
            "type":"video",
            "id":videoId,
        });
        return { 
            videos: JSON.parse(body),
            loading: false
        }
    }
    return { 
        videos: {
            items:[]
        },
        loading: true
    };
    // return { 
    //     videos: mockData,
    //     loading: false
    // };
}

export const useFetchVideoInfo = (videoId) =>{
    const gapi = useGapi();
    const [state, setState] = useState({
        videos:{
            items:[]
        },
        loading:true,
    });

    useEffect(()=>{
        (async function iife(param1, param2){ 
            const response = await getRelatedVideos(param1, param2);
            setState(response);
        })(gapi,videoId);
    },[gapi,videoId]);

    return state;
}

