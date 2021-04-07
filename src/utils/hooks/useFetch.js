import { useState, useEffect, useCallback } from 'react';
// import { mockVideos } from '../../mockData';

const useFetch = (param, fetching) => {
  const [videoList, setVideoList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    if (fetching) {
      try {
        const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${param}&type=video&key=${process.env.REACT_APP_API_KEY}`,
          {
            method: 'get',
            headers: { 'Content-Type': 'application/json' },
          }
        );
        const data = await response.json();
        // const data = mockVideos;
        console.log('FETCHING');
        setVideoList(data);
      } catch (err) {
        setError(true);
      }
    }

    setLoading(false);
  }, [param, fetching]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { videoList, loading, error };
};

export default useFetch;
