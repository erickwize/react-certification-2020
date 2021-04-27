import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import PlayVideo from '../../components/PlayVideo';
import PlayList from '../../components/PlayList';
import { VideoSection, VideoContainer, ListContainer } from './Video.styled';
import { useGlobalProvider } from '../../store/global/global.provider';
import { fetchVideos, addVideo, removeVideo } from '../../store/global/GlobalAction';
import useIsFavorite from '../../utils/hooks/useIsFavorite';

const Video = () => {
  const matchParams = useParams();
  const {
    state: { videoList, videoSelected, favoriteVideos, user },
    dispatch,
  } = useGlobalProvider();

  const favorite = useIsFavorite(matchParams.videoId, favoriteVideos, user);

  const { videoId } = matchParams;

  /* eslint-disable */
  useEffect(() => {
    if (!videoList?.items) {
      fetchVideos(dispatch, videoId, true);
    }
  }, []);
  /* eslint-disable */

  const addFavorite = (newVideo) => {
    const newFavorites = [...favoriteVideos, newVideo];
    addVideo(dispatch, newFavorites);
  };

  const removeFavorite = (videoId) => {
    const newFavorites = favoriteVideos.filter((video) => video.videoId !== videoId);
    removeVideo(dispatch, newFavorites);
  };

  if (!videoSelected) return <>Loading...</>;

  return (
    <>
      <VideoSection>
        <VideoContainer>
          <PlayVideo
            video={{
              user,
              videoSelected,
              favorite,
              addFavorite,
              removeFavorite,
            }}
          />
        </VideoContainer>
        <ListContainer>
          <PlayList videoId={videoId} />
        </ListContainer>
      </VideoSection>
    </>
  );
};

export default Video;
