import styled from 'styled-components';

const VideoContent = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  height: 94px;
  transform: none;

  :hover {
    transform: scale(1.03) translateZ(0px);
  }
`;

const VideoImagen = styled.img`
  width: 168px;
  height: 90px;
  object-fit: cover;
  object-position: center center;
`;

const VideoDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2 1 100%;
  h5 {
    font-size: 15px;
    margin: 2px 5px 1px 5px;
    padding: 0px;

    @media (max-width: 1100px) {
      font-size: 2.2vw;
    }
    @media (max-width: 450px) {
      font-size: 12px;
    }
  }
  p {
    font-size: 12px;
    color: ${({ theme }) => theme.cardText};
    margin: 0px 0px 0px 5px;
    padding: 0px;

    @media (max-width: 1100px) {
      font-size: 1.5vw;
    }
    @media (max-width: 450px) {
      font-size: 10px;
    }
  }
`;

export { VideoContent, VideoImagen, VideoDetails };
