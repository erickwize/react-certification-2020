import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header.component';
import CardContainer from '../CardContainer/CardContainer.component';

const Main = styled.div`
  display: flex;
  justify-content: center;
  padding: 4rem 10rem 3rem;
  font-family: 'Roboto', sans-serif;
  background-color: #191919;
`;

function App() {
  return (
    <>
      <Header/>
      <Main>
        <CardContainer/>
      </Main>
    </>
  );
}

export default App;
