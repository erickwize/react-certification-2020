import React from 'react';

import { HomeSection, Title, VideoContainer } from '../Home/Home.styled';
import { VideoCard } from '../../components';
import { useGlobalProvider } from '../../store/global/global.provider';

const Favorites = () => {
  const {
    state: { favoriteVideos },
  } = useGlobalProvider();

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
          {favoriteVideos.map((video) => (
            <VideoCard key={video.videoId} data={video} />
          ))}
        </VideoContainer>
      </HomeSection>
    </>
  );
};

export default Favorites;
