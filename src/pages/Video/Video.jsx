import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import PlayVideo from '../../components/PlayVideo';
import PlayList from '../../components/PlayList';
import { VideoSection, VideoContainer, ListContainer } from './Video.styled';
import { useGlobalProvider } from '../../store/global/Global.provider';
import { fetchVideos } from '../../store/global/GlobalAction';

const Video = () => {
  const matchParams = useParams();

  const {
    state: { videoList, videoSelected },
    dispatch,
  } = useGlobalProvider();

  const videoId = videoSelected ? videoSelected.id.videoId : null;

  useEffect(() => {
    if (!videoList?.items) {
      fetchVideos(dispatch, matchParams.id, true);
    }
  }, []);

  if (!videoSelected) return <>Loading...</>;

  return (
    <>
      <VideoSection>
        <VideoContainer>
          <PlayVideo videoSelected={videoSelected} videoId={videoId} />
        </VideoContainer>
        <ListContainer>
          <PlayList videoId={videoId} />
        </ListContainer>
      </VideoSection>
    </>
  );
};

export default Video;
