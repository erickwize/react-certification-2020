import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const VideoCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  color: #000000;
  border-radius: 5px;
  width: 100%;
  height: 345px;
  align-self: center;
  padding: 12px;
  border: 1px solid #e4e4e4;
`;

const VideoCardImage = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 5px;
`;

const VideoCardTitle = styled.h2`
  font-weight: 900;
  font-size: 16px;
  // word-break: break-all;
`;

const VideoCardDescription = styled.p`
  font-weight: 400;
  font-size: 14px;
  margin: 0;
  word-break: break-all;
  
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 5.4em;
  line-height: 1.8em;
`;

function VideoCard({ video }) {
  const { id, title, description, thumbnail } = video;
  return (
    <Link to={`/video/${id}`}>
      <VideoCardWrapper>
        <VideoCardImage src={thumbnail} alt="video thumbnail" />
        <VideoCardTitle>{title}</VideoCardTitle>
        <VideoCardDescription>{description}</VideoCardDescription>
      </VideoCardWrapper>
    </Link>
  );
}

export default VideoCard;
