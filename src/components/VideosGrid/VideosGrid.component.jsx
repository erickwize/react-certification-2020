import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { VideoGridItem } from './VideoGridItem/VideoGridItem.component';


const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    a{
      color:black;
    }
`;

export const VideosGrid = ({data}) => {

  return <Container data-testid="videosGrid">
      {
          data.items.map(video =>
            <Link key={video.etag} to={`/video/${video.id.videoId}`}>
              <VideoGridItem key={video.etag}
              video={video}/>
            </Link>
          )
      }
  </Container>;
}