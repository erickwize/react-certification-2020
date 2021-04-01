/* eslint-disable no-shadow */
/* global gapi */
import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import Header from '../Header';
import Videos from '../VideoList';

const Content  = styled.div`

`;


const App = () => {
  const [query, setQuery] = useState("react js");
  const [data, setVideos] = useState([]);
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

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

  const makeSearch = async (query) =>{
    try {
      const promise = await gapi.client.youtube.search.list({
        part: ["snippet"],
        maxResults:20,
        q: query,
        type:["video"]
      });
      setVideos(promise.result.items);
    } catch (error) {
      console.log("Error while searching...", error)
    }
  }

  useEffect(()=>{
    loadClient();
  });

  useEffect(()=>{
    makeSearch(query);
  },[query]);

  const getSearchQuery = (query) =>{
    setQuery(query);
  };

  // Make sure the client is loaded before calling this method.
  return (
        <div className="App">
            <Header searchHandler={getSearchQuery} />
            <Content >
              <Videos data= {data}/>
            </Content>
        </div>
  );
}

export default App;
