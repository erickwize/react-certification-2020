/* global gapi */

import React from 'react';
import styled from 'styled-components'
import Header from '../Header';
import Videos from '../VideoList';
import data from "../../mock/youtube-videos-mock.json";

const Content  = styled.div`

`;


const App = () => {


  const apiKey= process.env.REACT_APP_YOUTUBE_API_KEY;

  const initClient = async()=>{
    try{
     await gapi.client.init({
        'apiKey': apiKey,
        'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
      });
    }catch(error){
      console.error("Init client call error",error);
    }
  }

  const loadClient = async()=>{
    try{
     await gapi.load("client",initClient);
    }catch(error){
      console.error("Error loading GAPI client for API", error);
    }

  };

  const makeSearch = async () =>{
    try {
      const promise = await gapi.client.youtube.search.list({
        part: ["snippet"],
        maxResults:20,
        q: "Wizeline",
        type:["video"]
      });

      console.log("SUCCESS", promise)
    } catch (error) {
      console.log("Error while searching...", error)
    }
  }

  // Make sure the client is loaded before calling this method.

  loadClient();
  makeSearch();
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
