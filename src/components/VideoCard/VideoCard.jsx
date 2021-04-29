import React from 'react';
import { Link, useRouteMatch, useHistory, useLocation } from 'react-router-dom';

import { VideoBox, VideoImg, VideoTitle, VideoDescription } from './VideoCard.styled';
import { selectVideo } from '../../store/global/GlobalAction';
import { useGlobalProvider } from '../../store/global/global.provider';
import IconButton from '../FavoriteButton';
import useIsFavorite from '../../utils/hooks/useIsFavorite';

function VideoCard({ data, show, handlers, ...props }) {
  const history = useHistory();
  const location = useLocation();
  const { path } = useRouteMatch();
  const { title, description, url, videoId, favoriteVideos, channelTitle, user } = data;
  const favorite = useIsFavorite(videoId, favoriteVideos, user);

  const { dispatch } = useGlobalProvider();

  const selectingVideo = () => {
    selectVideo(dispatch, data);
  };

  const favoriteHandler = () => {
    if (!user) {
      return history.push({ pathname: '/login', state: { background: location } });
    }
    const newVideo = { videoId, title, description, channelTitle, url };
    const { addFavorite = () => {}, removeFavorite } = handlers;

    if (favorite) return removeFavorite(videoId);
    addFavorite(newVideo);
  };

  const route = path === '/' ? 'video' : path;

  return (
    <VideoBox {...props}>
      <Link
        to={{
          pathname: `${route}/${videoId}`,
        }}
        onClick={selectingVideo}
      >
        <VideoImg src={url} alt={title} />
        <VideoTitle>{title}</VideoTitle>
        <VideoDescription data-testid="paragraph">{description}</VideoDescription>
      </Link>
      <IconButton onClick={() => favoriteHandler()} show={show} container="card">
        {favorite ? 'Remove' : 'Add'}
      </IconButton>
    </VideoBox>
  );
}

export default VideoCard;
