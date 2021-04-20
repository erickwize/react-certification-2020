import { useState, useEffect } from 'react';

const useIsFavorite = (videoId, favoriteVideos) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorite = favoriteVideos.find((video) => video.videoId === videoId);
    setIsFavorite(favorite);
  }, [videoId, favoriteVideos]);

  return isFavorite;
};

export default useIsFavorite;
