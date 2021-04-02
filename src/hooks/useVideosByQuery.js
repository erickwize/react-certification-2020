import { useState, useEffect, useCallback } from 'react';
import getByQuery from '../api/getByQuery';

const useVideosByQuery = (query = '') => {
  const [isLoading, setIsLoading] = useState(false);
  const [youtubeVideos, setYoutubeVideos] = useState([]);

  const parseList = (data) => {
    const list = data.items.map((video) => ({
      title: video.snippet.title,
      description: video.snippet.description,
      thumbnail: video.snippet.thumbnails.medium.url,
      id: video.id.videoId,
    }));
    return list;
  };

  const fetchData = useCallback(async () => {
    setIsLoading(true);

    try {
      const data = await getByQuery(query);

      const videos = parseList(data);

      setYoutubeVideos(videos);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, [query]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [isLoading, youtubeVideos];
};

export default useVideosByQuery;
