import styled from 'styled-components';

const VideoSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

const VideoContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  @media (max-width: 1100px) {
    width: 100%;
  }
`;

const ListContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  overflow: scroll;

  @media (max-width: 1100px) {
    width: 100%;
    overflow: initial;
  }
`;

export { VideoSection, VideoContainer, ListContainer };
