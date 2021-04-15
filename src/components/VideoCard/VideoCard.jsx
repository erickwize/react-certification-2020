import React from 'react';
import { Link } from 'react-router-dom';

import VideoBox from './VideoCard.styled';
import { selectVideo } from '../../store/global/GlobalAction';
import { useGlobalProvider } from '../../store/global/global.provider';

function VideoCard({ data }) {
  const { title, description } = data?.snippet;
  const source = data?.snippet.thumbnails.medium.url;
  const videoId = data?.id?.videoId;

  const { dispatch } = useGlobalProvider();

  const selectingVideo = () => {
    selectVideo(dispatch, data);
  };

  return (
    <VideoBox>
      <Link
        to={{
          pathname: `/video/${videoId}`,
        }}
        onClick={selectingVideo}
      >
        <img src={source} alt={title} />
        <h3>{title}</h3>
        <p data-testid="paragraph">{description}</p>
      </Link>
    </VideoBox>
  );
}

export default VideoCard;
