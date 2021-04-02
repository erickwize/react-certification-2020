import { useState, useEffect, useCallback } from 'react';
import getById from '../api/getById';

const useVideo = (videoId) => {
  const [isLoading, setIsLoading] = useState(false);
  const [youtubeVideo, setYoutubeVideo] = useState([]);

  const parseVideo = (data) => {
    if (!data || data.length === 0) {
      return null;
    }

    const video = data.items[0];
    return {
      title: video.snippet.title,
      description: video.snippet.description,
      thumbnail: video.snippet.thumbnails.medium.url,
      id: video.id,
    };
  };

  const fetchData = useCallback(async () => {
    setIsLoading(true);

    try {
      const data = await getById(videoId);

      const video = parseVideo(data);

      setYoutubeVideo(video);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, [videoId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [isLoading, youtubeVideo];
};

export default useVideo;
