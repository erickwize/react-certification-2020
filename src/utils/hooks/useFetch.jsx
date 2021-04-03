import { useState, useEffect } from 'react';

export const useFetch = url => {

    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      async function fetchData() {
        const response = await fetch(url);
        const data = await response.json();
        const item = data.items;
        setVideos(item);
        setLoading(false);
      }
      fetchData();
    },[]);
    return{videos, loading}
}
  
export default useFetch;
