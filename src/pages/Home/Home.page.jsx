import React from 'react';

import { HomeSection, Title, VideoContainer } from './Home.styled';
import { VideoCard, Tooltip } from '../../components';
import { useGlobalProvider } from '../../store/global/global.provider';
import { addVideo, removeVideo } from '../../store/global/GlobalAction';

function HomePage() {
  const {
    state: { fetchingVideo, videoList, error, favoriteVideos, user },
    dispatch,
  } = useGlobalProvider();

  const addFavorite = (newVideo) => {
    const newFavorites = [...favoriteVideos, newVideo];
    addVideo(dispatch, newFavorites);
  };

  const removeFavorite = (videoId) => {
    const newFavorites = favoriteVideos.filter((video) => video.videoId !== videoId);
    removeVideo(dispatch, newFavorites);
  };

  if (fetchingVideo) return <>Loading...</>;

  if (error) return <>Network error</>;

  return (
    <>
      <HomeSection>
        <Title>
          <h1>Enjoy watching!</h1>
        </Title>
        <VideoContainer>
          {videoList?.items?.length > 0 &&
            videoList.items.map((video) => {
              const { title, description, channelTitle } = video?.snippet;
              const { url } = video?.snippet.thumbnails.medium;
              const videoId = video?.id?.videoId;
              const data = { title, description, videoId, channelTitle, url };
              return (
                <Tooltip key={videoId}>
                  {(props) => (
                    <VideoCard
                      {...props}
                      data={{ ...data, favoriteVideos, user }}
                      handlers={{ addFavorite, removeFavorite }}
                    />
                  )}
                </Tooltip>
              );
            })}
        </VideoContainer>
      </HomeSection>
    </>
  );
}

export default HomePage;
