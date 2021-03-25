import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

const marginBottom = '30px';

const StyledVideo = styled(Paper)`
  @media only screen and (max-width: 900px) {
    width: 49.5%;
    margin-bottom: ${marginBottom};
  }

  @media only screen and (min-width: 900px) {
    width: 32.5%;
    margin-bottom: ${marginBottom};
  }

  @media only screen and (min-width: 1400px) {
    width: 24.5%;
    margin-bottom: ${marginBottom};
  }

  .MuiPaper-root {
    background-color: var(--text-color);
    color: var(--sub-color);
    border-radius: 0;
    border-top-left-radius: 3%;
    border-top-right-radius: 3%;
    height: 100%;
  }
  text-align: left;
`;

const TextBase = styled.p`
  margin: 0 10px 10px 10px;
  text-overflow: hidden;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const VideoTitle = styled(TextBase)`
  max-height: 30%;
  @media only screen and (max-width: 600px) {
    font-size: 0.7rem;
  }

  @media only screen and (min-width: 600px) {
    font-size: 0.7rem;
  }

  @media only screen and (min-width: 900px) {
    font-size: 0.9rem;
  }
`;

const ChannelTitle = styled(TextBase)`
  font-weight: 100;
  @media only screen and (max-width: 600px) {
    font-size: 0.5rem;
  }

  @media only screen and (min-width: 600px) {
    font-size: 0.6rem;
  }

  @media only screen and (min-width: 900px) {
    font-size: 0.7rem;
  }
`;

const ThumbnailBase = styled.img`
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 2%;
  border-top-right-radius: 2%;
`;

const Thumbnail = styled(ThumbnailBase)`
  @media only screen and (max-width: 600px) {
    height: 90px;
  }

  @media only screen and (min-width: 600px) {
    height: 110px;
  }

  @media only screen and (min-width: 900px) {
    height: 130px;
  }

  @media only screen and (min-width: 1400px) {
    height: 150px;
  }
`;

export { StyledVideo, VideoTitle, Thumbnail, ChannelTitle };
