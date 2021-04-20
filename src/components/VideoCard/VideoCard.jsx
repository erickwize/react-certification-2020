import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import VideoBox from './VideoCard.styled';
import { selectVideo } from '../../store/global/GlobalAction';
import { useGlobalProvider } from '../../store/global/global.provider';

function VideoCard({ data }) {
  const { path } = useRouteMatch();
  const { title, description, url, videoId } = data;

  const { dispatch } = useGlobalProvider();

  const selectingVideo = () => {
    selectVideo(dispatch, data);
  };
  const route = path === '/' ? 'video' : path;

  return (
    <VideoBox>
      <Link
        to={{
          pathname: `${route}/${videoId}`,
        }}
        onClick={selectingVideo}
      >
        <img src={url} alt={title} />
        <h3>{title}</h3>
        <p data-testid="paragraph">{description}</p>
      </Link>
    </VideoBox>
  );
}

export default VideoCard;
