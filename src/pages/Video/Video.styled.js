import styled from 'styled-components';

const VideoSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const VideoContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;

const ListContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export { VideoSection, VideoContainer, ListContainer };
