import React from 'react';
import Paper from '@material-ui/core/Paper';

import { StyledVideo, VideoTitle, Thumbnail, ChannelTitle } from './VideoListItem.styled';

export default function Video({ data }) {
  const { title, thumbnails, channelTitle } = data.snippet;
  return (
    <StyledVideo>
      <Paper elevation={0}>
        <Thumbnail src={thumbnails.default.url} alt={title} />
        <VideoTitle>{title}</VideoTitle>
        <ChannelTitle>{channelTitle}</ChannelTitle>
      </Paper>
    </StyledVideo>
  );
}
