import React from 'react';
import { Link } from 'react-router-dom';
import VideoBox from './VideoCard.styled';

function VideoCard({ data, videoList }) {
  const { title, description } = data?.snippet;
  const source = data?.snippet.thumbnails.default.url;
  const videoId = data?.id?.videoId;
  return (
    <VideoBox>
      <Link
        to={{
          pathname: `/video/${videoId}`,
          data: { data, videoList },
        }}
      >
        <img src={source} alt={title} />
        <h3>{title}</h3>
        <p data-testid="paragraph">{description}</p>
      </Link>
    </VideoBox>
  );
}

export default VideoCard;
