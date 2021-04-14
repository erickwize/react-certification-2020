import React, { useContext } from 'react';
import { Wrapper, Title, Iframe } from './VideoPlayer.styled';
import { GlobalContext } from '../../context/GlobalContext';

function VideoPlayer({ url }) {
  const globalContext = useContext(GlobalContext);
  console.log('VideoPlayer', globalContext.video.currVid);
  const text =
    typeof globalContext.video.currVid !== 'undefined'
      ? globalContext.video.currVid.snippet.title.replace(/&#39;/g, "'")
      : '';
  return (
    <Wrapper>
      {globalContext.video.currVid && (
        <>
          <Iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${globalContext.video.currVid.id.videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <Title>{text}</Title>
          <p>
            <small>{url}</small>
          </p>
        </>
      )}
    </Wrapper>
  );
}

export default VideoPlayer;
