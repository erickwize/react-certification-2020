import styled from 'styled-components';

const VideoiFrame = styled.iframe`
  width: 100%;
  height: 600px;
`;

const VideoDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  align-items: start;
`;

const Title = styled.h2`
  margin: 0px;
`;

const Paragraph = styled.p`
  padding: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export { VideoiFrame, VideoDetails, Title, Paragraph };
