import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import PlayVideo from '../../components/PlayVideo';
import { VideoSection, VideoContainer, ListContainer } from '../Video/Video.styled';
import {
  VideoContent,
  VideoImagen,
  VideoDetails,
} from '../../components/PlayList/PlayList.styled';
import { useGlobalProvider } from '../../store/global/global.provider';
import { addVideo, removeVideo, selectVideo } from '../../store/global/GlobalAction';
import useIsFavorite from '../../utils/hooks/useIsFavorite';

const FavoriteVideo = () => {
  const matchParams = useParams();
  const {
    state: { videoSelected, favoriteVideos, user },
    dispatch,
  } = useGlobalProvider();
  const favorite = useIsFavorite(matchParams.videoId, favoriteVideos);

  /* eslint-disable */
  useEffect(() => {
    if (!videoSelected) {
      selectVideo(dispatch, favorite);
    }
  }, [videoSelected]);
  /* eslint-disable */

  const addFavorite = (newVideo) => {
    const newFavorites = [...favoriteVideos, newVideo];
    addVideo(dispatch, newFavorites);
  };

  const removeFavorite = (videoId) => {
    const newFavorites = favoriteVideos.filter((video) => video.videoId !== videoId);
    removeVideo(dispatch, newFavorites);
  };

  const onSelectVideo = (video) => {
    selectVideo(dispatch, video);
  };

  if (!videoSelected) return <>Video not found</>;

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
          {favoriteVideos.map((video) => {
            const { title, channelTitle, description, url, videoId } = video;
            return (
              <Link
                key={videoId}
                onClick={() =>
                  onSelectVideo({ title, channelTitle, description, url, videoId })
                }
                to={{
                  pathname: `/favorites/${videoId}`,
                }}
              >
                <VideoContent>
                  <VideoImagen src={url} />
                  <VideoDetails>
                    <h5>{title}</h5>
                    <p>{channelTitle}</p>
                  </VideoDetails>
                </VideoContent>
              </Link>
            );
          })}
        </ListContainer>
      </VideoSection>
    </>
  );
};

export default FavoriteVideo;
