/* eslint-disable no-shadow */
/* global gapi */
import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import Header from '../Header';
import VideoList from '../VideoList';
import VideoDetail from "../VideoDetail";

const Content  = styled.div`
    width: 100%;
    height:100%;
`;


const App = () => {
  const [query, setQuery] = useState("react js");
  const [data, setVideos] = useState([]);
  const [showDetail, setShowDetail] = useState(false)
  const [videoData, setVideoData] =  useState({})
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
  const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"];

  const initClient = async()=>{
    try{
     await gapi.client.init({
        'apiKey': apiKey,
        'discoveryDocs': DISCOVERY_DOCS,
      });
    }catch(error){
      console.error("Init client call error",error);
    }
  }

  const loadClient = async( )=>{
    try{
     gapi.load("client",initClient);
     console.log("client ready")
    }catch(error){
      console.error("Error loading GAPI client for API", error);
    }

  };

  const searchVideo = async (query) =>{
    try {
      const promise = await gapi.client.youtube.search.list({
        part: ["snippet"],
        maxResults:20,
        q: query,
        type:["video"]
      });
      setVideos(promise.result.items);
      console.log("search ready")
      setShowDetail(false)
    } catch (error) {
      console.log("Error while searching...", error)
    }
  }

  useEffect(()=>{
    loadClient();
  });

  useEffect(()=>{
    searchVideo();
  },[query]);

  const getSearchQuery = (query) =>{
    setQuery(query);
  };

  const setDetailView=(videoData)=>{
    setVideoData(videoData);
    setShowDetail(true);
  }

  // Make sure the client is loaded before calling this method.
  return (
        <div className="App">
            <Header searchHandler={getSearchQuery} />
            <Content >

              {!showDetail ?
                <VideoList data= {data} setShowDetail = {setDetailView}/>:
                <VideoDetail videoid={videoData} data= {data} />
              }
            </Content>
        </div>
  );
}

export default App;
