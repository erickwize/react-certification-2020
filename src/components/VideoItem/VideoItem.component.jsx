import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  width: 25%;
  padding: 10px;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
const Title = styled.p`
  font-size: 13px;
  margin-top: 0;
`;
const Thumbnail = styled.img`
  border-radius: 15px;
  width: 100%;
  max-height: 99px;
  object-fit: cover;
  @media (max-width: 500px) {
    max-height: 140px;
  }
`;

function VideoItem({ children, ...rest }) {
  if (rest.value.id.kind === 'youtube#video') {
    const text = rest.value.snippet.title.replace(/&#39;/g, "'");
    return (
      <Wrapper key={rest.value.etag}>
        <Thumbnail src={rest.value.snippet.thumbnails.high.url} />
        <Title>{text}</Title>
      </Wrapper>
    );
  }
  return <></>;
}

export default VideoItem;
