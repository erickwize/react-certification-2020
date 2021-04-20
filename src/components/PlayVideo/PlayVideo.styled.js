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
  align-items: center;
`;

const Title = styled.h2`
  margin: 0px;
`;

const Button = styled.button`
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 5px;
  width: 175px;
  height: 30px;
  background-color: #c00;
  color: #fff;
  margin-right: 5px;
  cursor: pointer;
  overflow: hidden;
  padding: 0px;
  position: relative;
  outline: none;
  font-weight: bold;
  font-size: small;
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
`;

const Paragraph = styled.p`
  padding: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export { VideoiFrame, VideoDetails, Title, Button, Paragraph };
