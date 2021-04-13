import React, { useState } from 'react';

import { VideoiFrame, VideoDetails, Title, Button, Paragraph } from './PlayVideo.styled';

const PlayVideo = ({ videoSelected, videoId }) => {
  const { title, description } = videoSelected.snippet;
  const [add, setAdd] = useState(false);

  const handleChange = () => {
    setAdd(!add);
  };

  const buttonLayer = !add ? 'AÑADIR A FAVORITOS' : 'ELIMINAR DE FAVORITOS';
  const vDescription = description ? description.split('.')[0] : null;

  return (
    <>
      <VideoiFrame title="playVideo" src={`https://www.youtube.com/embed/${videoId}`} />
      <VideoDetails>
        <Title>{title}</Title>
        <Button onClick={handleChange}>{buttonLayer} </Button>
      </VideoDetails>
      <Paragraph data-testid="paragraph">{vDescription}</Paragraph>
    </>
  );
};

export default PlayVideo;
