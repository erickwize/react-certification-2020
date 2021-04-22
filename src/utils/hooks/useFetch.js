import { useState, useEffect, useCallback } from 'react';
// import { mockVideos } from '../../mockData';

const useVideoList = (videoId) => {
  const [videosRelated, setVideosRelated] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&relatedToVideoId=${videoId}&type=video&key=${process.env.REACT_APP_API_KEY}`,
        {
          method: 'get',
          headers: { 'Content-Type': 'application/json' },
        }
      );
      const data = await response.json();
      // const data = mockVideos;
      console.log('FETCHING');
      setVideosRelated(data);
    } catch (err) {
      setError(true);
    }

    setLoading(false);
  }, [videoId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { videosRelated, loading, error };
};

export default useVideoList;
