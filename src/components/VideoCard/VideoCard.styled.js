import styled from 'styled-components';

const VideoBox = styled.div`
  height: 330px;
  width: 330px;
  border-radius: 10px;
  border: 1px solid #a0aec0;
  margin: 10px;
  cursor: pointer;
  position: relative;
  transform: none;
  background: ${({ theme }) => theme.cardTheme};

  :hover {
    transform: scale(1.03) translateZ(0px);
  }
`;

const VideoImg = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  position: relative;
`;

const VideoTitle = styled.h3`
  margin: 0 1rem;
  text-align: center;
  margin-top: 0px;
  font-size: 15px;
`;

const VideoDescription = styled.p`
  color: ${({ theme }) => theme.cardText};
  font-size: 13px;
  text-align: start;
  padding: 0px 5px 0px 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  position: relative;
`;

export { VideoBox, VideoImg, VideoTitle, VideoDescription };
