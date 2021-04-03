import styled from 'styled-components';

export const VideoGrid = styled.div`
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-template-rows: (auto-fill, 250px);
  column-gap: 10px;
  row-gap: 15px;
  display: grid;
  grid-auto-flow: dense;
`;

export const Container = styled.section`
  text-align: center;
  padding: 12px;
  margin: 0px 50px 0px 50px;
`;

export const Title = styled.h2`
  color: #fff;
  margin: 0;
  font-size: 3.75rem;
  font-weight: 300;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  @media (max-width: 890px) {
    font-size: 2.5rem;
  }
`;
