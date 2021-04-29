import React, { useContext } from 'react';
import { Wrapper } from './VideoHome.styled';
import { GlobalContext } from '../../context/GlobalContext';
import { useSearch } from '../../hooks/useSearch';
import VideoList from '../VideoList';

function VideoHome() {
  const globalContext = useContext(GlobalContext);
  const cQuery = globalContext.query === '' ? 'wizeline' : globalContext.query;
  // console.log('VideoHome:cQuery', cQuery);
  const { data, error, loading } = useSearch(cQuery);
  // console.log('VideoDetail:demoData', data, error, loading);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Hi Error {JSON.stringify(error)}</h1>;

  return <Wrapper>{data && <VideoList items={data.items} />}</Wrapper>;
}

export default VideoHome;
