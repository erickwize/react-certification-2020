import styled from 'styled-components';

const HomeSection = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.div`
  flex-basis: 100%;
  text-align: center;
  h1 {
    font-size: 2rem;
    letter-spacing: -2px;
    margin: 15px 0px 15px 0px;
  }
`;

const VideoContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 20px;
  width: 400px;

  @media (min-width: 900px) {
    width: 760px;
  }
  @media (min-width: 1250px) {
    width: 1100px;
  }
  @media (min-width: 1570px) {
    width: 1440px;
  }
  @media (min-width: 1870px) {
    width: 1790px;
  }
`;

export { HomeSection, Title, VideoContainer };
