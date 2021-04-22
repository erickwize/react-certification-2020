import React from 'react';

import { VideoiFrame, VideoDetails, Title, Button, Paragraph } from './PlayVideo.styled';

const PlayVideo = ({
  video: { user, videoSelected, favorite, addFavorite, removeFavorite },
}) => {
  const { title, description, videoId, channelTitle, url } = videoSelected;

  const add = () => {
    const newVideo = { videoId, title, description, channelTitle, url };
    addFavorite(newVideo);
  };

  const remove = () => {
    removeFavorite(videoId);
  };

  return (
    <>
      <VideoiFrame title="playVideo" src={`https://www.youtube.com/embed/${videoId}`} />
      <VideoDetails>
        <Title>{title}</Title>
        {!favorite ? (
          <Button onClick={add} show={user}>
            AÑADIR A FAVORITOS
          </Button>
        ) : (
          <Button onClick={remove} show={user}>
            ELIMINAR DE FAVORITOS
          </Button>
        )}
      </VideoDetails>
      <Paragraph data-testid="paragraph">{description}</Paragraph>
    </>
  );
};

export default PlayVideo;
