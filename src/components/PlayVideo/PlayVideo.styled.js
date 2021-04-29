import styled from 'styled-components';

const VideoiFrame = styled.iframe`
  width: 100%;
  height: 650px;

  @media (max-width: 1600px) {
    height: 500px;
  }
  @media (max-width: 700px) {
    height: 300px;
  }
`;

const VideoDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  margin: 0px;
  align-items: start;

  @media (max-width: 1100px) {
    padding: 6px;
  }
`;

const Title = styled.h2`
  margin: 0px;

  @media (max-width: 1100px) {
    font-size: 3vw;
  }
  @media (max-width: 700px) {
    font-size: 4vw;
  }
`;

const Paragraph = styled.p`
  margin: 10px;
  padding: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  @media (max-width: 1100px) {
    padding: 5px;
    font-size: 15px;
  }
  @media (max-width: 700px) {
    margin: 0px 5px 15px 5px;
    padding: 5px;
    font-size: 2.5vw;
  }
`;

export { VideoiFrame, VideoDetails, Title, Paragraph };
