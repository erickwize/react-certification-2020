import styled from 'styled-components';

export const Home = styled.section`
  display: block;
  margin: 1rem auto;
  padding-right: 1rem;
  padding-left: 1rem;
`;
export const VideoList = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 2.5rem auto;
  max-width: 1280px;
  @media screen and (min-width: 1025px) {
    max-width: 1440px;
  }
  @media screen and (max-width: 812px) {
    justify-content: center;
  }
`;

export const HomeTitle = styled.h1`
  display: block;
  font-size: 2.1rem;
  letter-spacing: -2px;
  font: Helvetica;
  color: #E92C8A;
  text-align: center;
  margin: 2.5rem;

  @media screen and (max-width: 720px) {
    font-size: 1.5rem;
    margin: 1.2rem;
  }
}
`;
