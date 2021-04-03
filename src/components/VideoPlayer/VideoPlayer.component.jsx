import React from 'react';
import { Wrapper, Title, Iframe } from './VideoPlayer.styled';

function VideoPlayer({ currVid, url }) {
  console.log('VideoPlayer', currVid);
  const text =
    typeof currVid !== 'undefined' ? currVid.snippet.title.replace(/&#39;/g, "'") : '';
  return (
    <Wrapper>
      {currVid && (
        <>
          <Iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${currVid.id.videoId}`}
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
