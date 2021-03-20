import React from 'react';
import styled from 'styled-components'
import Header from '../Header';
import Videos from '../Videos';
import data from "../../mock/youtube-videos-mock.json";

const Content  = styled.div`

`;


function App() {

  return (
        <div className="App">
            <Header/>
            <Content >
              <Videos data= {data}/>
            </Content>
        </div>
  );
}

export default App;
