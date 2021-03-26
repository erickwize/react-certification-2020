import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { Container, StyledVideoDetailsSidebar, LeftContent } from './VideoDetails.styled';
import data from '../../youtube-videos-mock.json';

import VideoPlayer from '../../components/VideoPlayer';
import VideoDetailsDescription from '../../components/VideoDetailsDescription';

const VideoDetails = () => {
  const { id } = useParams();
  const { title, description, publishedAt } = useLocation().state;

  return (
    <Container>
      <LeftContent>
        <VideoPlayer channelId={id} title={title} />
        <VideoDetailsDescription
          title={title}
          description={description}
          publishedAt={publishedAt}
        />
      </LeftContent>
      <StyledVideoDetailsSidebar list={data} />
    </Container>
  );
};

export default VideoDetails;
