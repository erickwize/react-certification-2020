import { useState, useEffect, useCallback } from 'react';
import getRelatedVideos from '../api/getRelatedVideos';

const useRelatedVideos = (videoId) => {
  const [isLoading, setIsLoading] = useState(false);
  const [youtubeVideos, setYoutubeVideos] = useState([]);

  const parseList = (data) => {
    const list = data.items
      .filter((video) => video.snippet)
      .map((video) => ({
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
      const data = await getRelatedVideos(videoId);

      const videos = parseList(data);

      setYoutubeVideos(videos);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, [videoId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [isLoading, youtubeVideos];
};

export default useRelatedVideos;
