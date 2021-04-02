import { useState, useEffect, useCallback } from 'react';
import { searchVideos } from '../api/youtube';

const useYoutubeSearchApi = (searchData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [videoList, setVideoList] = useState([]);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await searchVideos(searchData);
      if (data.errors) {
        setVideoList([]);
        console.log('error fetch youtube api', data);
      } else {
        setVideoList(data.items);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, [searchData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [isLoading, videoList];
};

export default useYoutubeSearchApi;
