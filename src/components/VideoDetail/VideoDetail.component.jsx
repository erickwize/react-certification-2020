import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import VideoList from '../VideoList';
import VideoPlayer from '../VideoPlayer';
import { Wrapper, Related, MainTitle } from './VideoDetail.styled';
import { useFetch } from '../../hooks/useFetch';
import { GlobalContext } from '../../context/GlobalContext';

function VideoDetail() {
  const history = useHistory();
  const globalContext = useContext(GlobalContext);
  if (globalContext.vidId === '') {
    history.push('/');
  }
  // console.log('VideoDetail', globalContext.vidId);
  const { data, error, loading } = useFetch(globalContext.vidId);
  // console.log('VideoDetail:demoData', data, error, loading);

  if (loading) return <MainTitle theme={globalContext.colors}>Loading...</MainTitle>;
  if (error)
    return (
      <MainTitle theme={globalContext.colors}>Hi Error {JSON.stringify(error)}</MainTitle>
    );

  return (
    <Wrapper>
      <VideoPlayer />
      {data && (
        <Related>
          <MainTitle theme={globalContext.colors}>Related videos</MainTitle>
          {data.items && <VideoList items={data.items} related />}
        </Related>
      )}
    </Wrapper>
  );
}

export default VideoDetail;
