import styled from 'styled-components';

const VideoiFrame = styled.iframe`
  width: 100%;
  height: 68%;
`;

const VideoDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
`;

const Title = styled.h2`
  margin: 0px;
`;

const Button = styled.button`
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 5px;
  width: 160px;
  height: 30px;
  background-color: transparent;
  margin-right: 5px;
  cursor: pointer;
  overflow: hidden;
  padding: 0px;
  position: relative;
  outline: none;
`;

const Paragraph = styled.p`
  padding: 10px;
`;

export { VideoiFrame, VideoDetails, Title, Button, Paragraph };
