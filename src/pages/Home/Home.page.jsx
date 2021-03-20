import React from 'react';
import { VideoCard} from '../../components/Cards/Video/Video.component'
import styled from 'styled-components'

const Container = styled.section`
    display:flex;
    flex: 1 1 0%;
    flex-flow: row wrap;
    flex-grow: 0;
    max-width: 100%;
    flex-basis: 100%;
    justify-content: flex-start;
    margin: 10px;
    width: 100%
`

function HomePage() {
  return (
    <Container>
      <VideoCard />
    </Container>
  );
}

export default HomePage;
