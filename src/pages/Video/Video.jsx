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
  const { videoList: videoFetching } = useFetch(id, fetching);
  // Create custom hook to fetch related videos

  useEffect(() => {
    if (!location.data) {
      setFetching(true);

      if (videoFetching?.items) {
        const { title, description, channelTitle } = videoFetching.items[0].snippet;
        setVideoDetail({ title, description, channelTitle });
      }
      return;
    }
    const { data } = location.data;
    const { title, description, channelTitle } = data.snippet;
    setVideoDetail({ title, description, channelTitle });
  }, [location, videoFetching]);

  useEffect(() => {
    const fetchRelatedVideos = async () => {
      try {
        const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&relatedToVideoId=${id}&type=video&key=${process.env.REACT_APP_API_KEY}`,
          {
            method: 'get',
            headers: { 'Content-Type': 'application/json' },
          }
        );
        const data = await response.json();
        setListItems(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchRelatedVideos();
  }, [id]);

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
