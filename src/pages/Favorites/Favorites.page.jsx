import React from 'react';

import { HomeSection, Title, VideoContainer } from '../Home/Home.styled';
import { VideoCard, Tooltip } from '../../components';
import { useGlobalProvider } from '../../store/global/global.provider';
import { removeVideo } from '../../store/global/GlobalAction';

const Favorites = () => {
  const {
    state: { favoriteVideos, user },
    dispatch,
  } = useGlobalProvider();

  const removeFavorite = (videoId) => {
    const newFavorites = favoriteVideos.filter((video) => video.videoId !== videoId);
    removeVideo(dispatch, newFavorites);
  };

  if (favoriteVideos.length === 0)
    return (
      <HomeSection>
        <Title>
          <h1>Add videos to your favorite list</h1>
        </Title>
      </HomeSection>
    );

  return (
    <>
      <HomeSection>
        <Title>
          <h1>Welcome to your favorite list!</h1>
        </Title>
        <VideoContainer>
          {favoriteVideos.map((video) => {
            return (
              <Tooltip key={video.videoId}>
                {(props) => (
                  <VideoCard
                    {...props}
                    data={{ ...video, favoriteVideos, user }}
                    handlers={{ removeFavorite }}
                  />
                )}
              </Tooltip>
            );
          })}
        </VideoContainer>
      </HomeSection>
    </>
  );
};

export default Favorites;
