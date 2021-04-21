import { useEffect, useState } from 'react';
import { ytapikey } from '../utils/config';

export const useFetch = (videoId) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&maxResults=5&key=${ytapikey}`;
      try {
        const response = await fetch(url);
        const responseData = await response.json();
        setData(responseData);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [videoId]);

  return { data, error, loading };
};
