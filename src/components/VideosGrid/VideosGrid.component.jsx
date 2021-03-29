import React from 'react';
import styled from 'styled-components';
import { VideoGridItem } from './VideoGridItem/VideoGridItem.component';


const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const VideosGrid = ({data}) => {
  return <Container data-testid="videosGrid">
      {
          data.items.map(video =>
            <VideoGridItem key={video.etag}
            video={video}/>
          )
      }

  </Container>;
}