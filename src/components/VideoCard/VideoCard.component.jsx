import React from 'react';
import styled from 'styled-components'

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
  border: 1px solid #E4E4E4;
`

const VideoCardImage = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 5px;
`

const VideoCardTitle = styled.h2`
  font-weight: 900;
  font-size: 16px;
`

const VideoCardDescription = styled.p`
  font-weight: 400;
  font-size: 14px;
  margin: 0;
`


function VideoCard({video}) {
  const { title, description, thumbnails } = video.snippet
  return <VideoCardWrapper>
    <VideoCardImage src={thumbnails.medium.url} alt="video thumbnail"/>
    <VideoCardTitle>{title}</VideoCardTitle>
    <VideoCardDescription>{description}</VideoCardDescription>
  </VideoCardWrapper>
}

export default VideoCard;
