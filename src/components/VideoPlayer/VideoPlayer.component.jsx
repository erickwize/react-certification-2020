import React, { useContext, useEffect, useState } from 'react';
import { Wrapper, Title, Iframe, Favorite, InfoWrapper } from './VideoPlayer.styled';
import { GlobalContext } from '../../context/GlobalContext';
import { useAuth } from '../../providers/Auth';

function VideoPlayer() {
  const globalContext = useContext(GlobalContext);
  const { authenticated } = useAuth();
  console.log('VideoPlayer', `https://www.youtube.com/embed/${globalContext.vidId}`);
  let text = '';
  let image = '';
  if (typeof globalContext.vidObject.snippet !== 'undefined') {
    text = globalContext.vidObject.snippet.title.replace(/&#39;/g, "'");
    image = globalContext.vidObject.snippet.thumbnails.high;
  }

  let favObject = [];
  const addFavorite = (videoId, vidTitle, vidImg) => {
    favObject.push({
      id: { videoId },
      snippet: { title: vidTitle, thumbnails: { high: vidImg } },
    });
  };
  const removeFavorite = (vidId) => {
    favObject = favObject.filter((item) => item.id.videoId !== vidId);
  };

  const favStorage = window.localStorage;
  favObject = JSON.parse(favStorage.getItem('favorites')) || [];
  console.log('favorites', favObject);
  const [isFav, setIsFav] = useState(false);
  useEffect(() => {
    if (favObject) {
      const filtrado = favObject.filter(
        (item) => item.id.videoId === globalContext.vidId
      );
      setIsFav(filtrado.length > 0);
    }
  }, [globalContext.vidId]);

  const onClickStarHandler = () => {
    console.log(favObject);
    if (isFav) {
      removeFavorite(globalContext.vidId);
      favStorage.setItem('favorites', JSON.stringify(favObject));
      setIsFav(false);
    } else {
      addFavorite(globalContext.vidId, text, image);
      favStorage.setItem('favorites', JSON.stringify(favObject));
      setIsFav(true);
    }
  };
  return (
    <Wrapper>
      {globalContext.vidId && (
        <>
          <Iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${globalContext.vidId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <InfoWrapper>
            {authenticated && <Favorite onClick={onClickStarHandler} active={isFav} />}
            <Title>{text}</Title>
          </InfoWrapper>
        </>
      )}
    </Wrapper>
  );
}

export default VideoPlayer;
