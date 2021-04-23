import { useState, useEffect } from 'react';
import { useApp } from '../../providers/App/AppProvider';

export const useFetch = (url) => {
  const context = useApp();
  const { search } = context;

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
  }, [search]);
  return { videos, loading };
};

export default useFetch;
