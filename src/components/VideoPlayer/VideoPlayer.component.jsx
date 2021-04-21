import React, { useContext } from 'react';
import { Wrapper, Title, Iframe } from './VideoPlayer.styled';
import { GlobalContext } from '../../context/GlobalContext';

function VideoPlayer() {
  const globalContext = useContext(GlobalContext);
  console.log('VideoPlayer', `https://www.youtube.com/embed/${globalContext.vidId}`);
  const text =
    typeof globalContext.vidObject !== 'undefined'
      ? globalContext.vidObject.snippet.title.replace(/&#39;/g, "'")
      : '';
  return (
    <Wrapper>
      {globalContext.vidId && (
        <>
          <Iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${globalContext.vidId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <Title>{text}</Title>
        </>
      )}
    </Wrapper>
  );
}

export default VideoPlayer;
