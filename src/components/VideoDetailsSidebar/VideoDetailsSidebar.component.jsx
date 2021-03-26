import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import {
  VideoList,
  VideoTitle,
  Thumbnail,
  ChannelTitle,
  StyledVideo,
} from './VideoDetailsSidebar.styled';

const VideoListItem = ({ data }) => {
  const { title, thumbnails, channelTitle, description, publishedAt } = data.snippet;

  return (
    <Link
      to={{
        pathname: `/video/${data.id.videoId}`,
        state: { title, description, publishedAt },
      }}
    >
      <StyledVideo>
        <Thumbnail src={thumbnails.default.url} alt={title} />
        <VideoTitle>{title}</VideoTitle>
        <ChannelTitle>{channelTitle}</ChannelTitle>
      </StyledVideo>
    </Link>
  );
};

const VideoDetailsSidebar = ({ list }) => {
  return (
    <VideoList>
      {list.items.slice(1).map((e) => (
        <VideoListItem data={e} key={e.etag} />
      ))}
    </VideoList>
  );
};

export default withRouter(VideoDetailsSidebar);
