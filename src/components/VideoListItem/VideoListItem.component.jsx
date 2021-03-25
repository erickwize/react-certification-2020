import React from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';

import { StyledVideo, VideoTitle, Thumbnail, ChannelTitle } from './VideoListItem.styled';

export default function Video({ data }) {
  const { title, thumbnails, channelTitle } = data.snippet;
  return (
    <StyledVideo>
      <Link to={`/video/${data.id.videoId}`}>
        <Paper elevation={0}>
          <Thumbnail src={thumbnails.default.url} alt={title} />
          <VideoTitle>{title}</VideoTitle>
          <ChannelTitle>{channelTitle}</ChannelTitle>
        </Paper>
      </Link>
    </StyledVideo>
  );
}
