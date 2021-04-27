import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { VideoiFrame, VideoDetails, Title, Paragraph } from './PlayVideo.styled';
import IconButton from '../FavoriteButton';

const PlayVideo = ({
  video: { user, videoSelected, favorite, addFavorite, removeFavorite },
}) => {
  const { title, description, videoId, channelTitle, url } = videoSelected;
  const history = useHistory();
  const location = useLocation();

  const favoriteHandler = () => {
    if (!user) {
      return history.push({ pathname: '/login', state: { background: location } });
    }
    const newVideo = { videoId, title, description, channelTitle, url };
    if (favorite) return removeFavorite(videoId);
    addFavorite(newVideo);
  };

  return (
    <>
      <VideoiFrame title="playVideo" src={`https://www.youtube.com/embed/${videoId}`} />
      <VideoDetails>
        <Title>{title}</Title>
        <IconButton onClick={() => favoriteHandler()} show="true" container="playvideo">
          {favorite ? 'Remove' : 'Add'}
        </IconButton>
      </VideoDetails>
      <Paragraph data-testid="paragraph">{description}</Paragraph>
    </>
  );
};

export default PlayVideo;
