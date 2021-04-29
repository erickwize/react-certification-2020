import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import VideoList from '../VideoList';
import VideoPlayer from '../VideoPlayer';
import { Wrapper, Related } from './VideoFavoriteDetail.styled';
import { GlobalContext } from '../../context/GlobalContext';

function VideoFavoriteDetail() {
  const history = useHistory();
  const globalContext = useContext(GlobalContext);
  if (globalContext.vidId === '') {
    history.push('/');
  }
  let favObject = [];
  const favStorage = window.localStorage;
  favObject = JSON.parse(favStorage.getItem('favorites')) || [];
  // console.log('favorites', favObject);

  return (
    <Wrapper>
      <VideoPlayer />
      {favObject && (
        <Related>
          <h3>Other favorite videos</h3>
          {favObject && <VideoList items={favObject} related favorite />}
        </Related>
      )}
    </Wrapper>
  );
}

export default VideoFavoriteDetail;
