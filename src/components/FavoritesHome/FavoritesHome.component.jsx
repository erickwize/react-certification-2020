import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Title } from './FavoritesHome.styled';
import VideoList from '../VideoList';

function FavoritesHome() {
  let favObject = [];
  const favStorage = window.localStorage;
  favObject = JSON.parse(favStorage.getItem('favorites'));

  const items = favObject;
  // console.log('FavoritesHome', items);
  return (
    <Wrapper>
      {!items && (
        <>
          <Title>
            Ooooops! seems like this list is empty{' '}
            <span role="img" aria-label="oops emoji">
              🤭
            </span>
          </Title>

          <Title>
            <Link to="/">
              Go watch some videos{' '}
              <span role="img" aria-label="tv emoji">
                📺
              </span>
            </Link>
          </Title>
        </>
      )}
      {items && <VideoList items={items} favorite />}
    </Wrapper>
  );
}

export default FavoritesHome;
