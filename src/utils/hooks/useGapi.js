import { useState, useEffect } from 'react';

export const useGapi = () => {
    const [gapi ,setGapi] = useState(null);

    const initGapi = async(param) =>{
        console.log(param);
        try{
            await window.gapi.client.setApiKey('AIzaSyCZyIjniq9EpuwZQ_Ic04ukuhEpXQvmyX8');
            await window.gapi.client.load('https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest');
            setGapi(window.gapi);
        }catch(e){
            console.error(e);
        }
    }

    useEffect(()=>{
        window.gapi.load('client',initGapi);
    }, []);

    return gapi;
}
