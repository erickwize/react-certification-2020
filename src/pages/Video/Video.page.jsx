import React, { useRef } from 'react';
import styled from 'styled-components';
import './Video.styles.css';
import VideoCard from '../../components/VideoCard';
import { useParams } from 'react-router';
import useRelatedVideos from '../../hooks/useRelatedVideos';
import useVideo from '../../hooks/useVideo';

const GridList = styled.div`
  display: grid;
  justify-items: center;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  margin: 20px;
`;

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`

const VideoDetails = styled.div`
  max-width: 960px;
  margin: 0 24px;
  align-self: start;

`

const VideoFrameContainer = styled.div`
  overflow: hidden;
  position: relative;
  width:100%;
  max-width: 100%;
  max-height: 600px;
  // margin-top: 32px;

  &:after {
    padding-top: 56.25%;
    display: block;
    content: '';
  }
`

const VideoFrame = styled.iframe.attrs(props => ({
  title: "YouTube video player",
  src: `https://www.youtube.com/embed/${props.videoId}?autoplay=1`,
  frameborder: "0",
  allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
}))`
  position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const Subtitle = styled.h3`
  padding: 24px;
`

function VideoPage() {

  let { id } = useParams();

  const sectionRef = useRef(null);

  const [, videos] = useRelatedVideos(id);
  const [, video] = useVideo(id);

  return (
    <section ref={sectionRef} >
      <VideoContainer>

        <VideoFrameContainer>
          <VideoFrame videoId={id} allowFullScreen data-testid="youtube-video" />
        </VideoFrameContainer>

        {video && <VideoDetails>
          <h2>{video.title}</h2>
          <p>{video.description}</p>
        </VideoDetails>}

      </VideoContainer>

      <Subtitle>Related videos</Subtitle>
      <GridList>
        {videos.map((elem) => (
          <VideoCard key={elem.id} video={elem} />
        ))}
      </GridList>
    </section>
  );
}

export default VideoPage;
