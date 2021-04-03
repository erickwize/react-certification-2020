import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import PlayVideo from '../../components/PlayVideo';
import PlayList from '../../components/PlayList';
import { VideoSection, VideoContainer, ListContainer } from './Video.styled';
import useFetch from '../../utils/hooks/useFetch';

const Video = () => {
  const location = useLocation();
  const matchParams = useParams();
  const [id, setId] = useState(matchParams.id);
  const [videoDetail, setVideoDetail] = useState({});
  const [listItems, setListItems] = useState([]);
  const [fetching, setFetching] = useState(false);
  const { videoList: videoListFetching } = useFetch(id, fetching);
  // Create custom hook to fetch related videos

  useEffect(() => {
    if (!location.data) {
      setFetching(true);

      if (videoListFetching?.items) {
        const { title, description, channelTitle } = videoListFetching.items[0].snippet;
        setListItems(videoListFetching);
        setVideoDetail({ title, description, channelTitle });
      }
      return;
    }
    const { data, videoList } = location.data;
    const { title, description, channelTitle } = data.snippet;
    setVideoDetail({ title, description, channelTitle });
    setListItems(videoList);
  }, [location, videoListFetching]);

  const handlePlayVideo = ({ videoId, title, description, channelTitle }) => {
    setId(videoId);
    setVideoDetail({ title, description, channelTitle });
    setFetching(false);
  };

  return (
    <>
      <VideoSection>
        <VideoContainer>
          <PlayVideo videoId={id} videoDetail={videoDetail} />
        </VideoContainer>
        <ListContainer>
          <PlayList listItems={listItems} handlePlayVideo={handlePlayVideo} />
        </ListContainer>
      </VideoSection>
    </>
  );
};

export default Video;
