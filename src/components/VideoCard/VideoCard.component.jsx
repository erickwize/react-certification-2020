import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../providers/GlobalContext';

import {
  VideoCardWrapper,
  Thumbnail,
  VideoTitle,
  VideoOverlay,
  VideoDescription,
  VideoInfo,
  FavoriteSelect,
} from './VideoCard.styles';
import FavIcon from './img/star_selected.png';
import StarIcon from './img/star_unselected.png';

function VideoCard({ videoData, cardClick, dispatch }) {
  const { favoritesList } = useContext(GlobalContext);
  const [descVisible, setDescVisible] = useState(false);

  const canShowDescription = () => {
    const description =
      videoData.description || `Dale click para ver el video ${videoData.title}`;
    return descVisible ? description : '';
  };

  const isFavorite = () => {
    if (favoritesList[videoData.videoId]) {
      return FavIcon;
    }
    return StarIcon;
  };

  const addFav = (event, video) => {
    event.stopPropagation();
    const favVideos = favoritesList;
    favVideos[video.videoId] = video;
    dispatch({ type: 'SET_FAVS_LIST', payload: favVideos });
  };

  return (
    <VideoCardWrapper data-testid="yt-videocard" onClick={() => cardClick(videoData)}>
      <Thumbnail img={videoData.thumbnail} alt={videoData.title}>
        <VideoOverlay
          onMouseEnter={() => setDescVisible(true)}
          onMouseLeave={() => setDescVisible(false)}
        >
          <VideoDescription data-testid="yt-videocard-description" visible={descVisible}>
            <FavoriteSelect
              img={isFavorite()}
              onClick={(event) => addFav(event, videoData)}
            />
            {canShowDescription()}
            <VideoInfo visible={descVisible}>
              {videoData.channel} | {videoData.uploadDate}
            </VideoInfo>
          </VideoDescription>
          <VideoTitle visible={descVisible}>
            {videoData.title.length > 35 && !descVisible
              ? `${videoData.title.substring(0, 34)}...`
              : videoData.title}
          </VideoTitle>
        </VideoOverlay>
      </Thumbnail>
    </VideoCardWrapper>
  );
}

export default VideoCard;
