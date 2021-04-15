import React from 'react';
import { Link } from 'react-router-dom';
import { VideoContent, VideoImagen, VideoDetails } from './PlayList.styled';
import { selectVideo } from '../../store/global/GlobalAction';
import useVideoList from '../../utils/hooks/useFetch';
import { useGlobalProvider } from '../../store/global/Global.provider';

const PlayList = ({ videoId }) => {
  const { videosRelated, error } = useVideoList(videoId, true);
  const { dispatch } = useGlobalProvider();

  const onHandleVideo = (videoSelected) => {
    selectVideo(dispatch, videoSelected);
  };

  if (error) return <>Network error</>;

  return (
    <>
      {videosRelated?.items &&
        videosRelated.items.map((video) => {
          const snippet = video?.snippet ? video.snippet : false;
          if (!snippet) return null;

          const { title = '', channelTitle = '' } = snippet;
          const sourceImg = snippet.thumbnails.medium.url;
          const { videoId: id } = video.id;
          return (
            <Link
              key={id}
              onClick={() => onHandleVideo(video)}
              to={{
                pathname: `/video/${id}`,
                data: { data: video, videoList: videosRelated },
              }}
            >
              <VideoContent>
                <VideoImagen src={sourceImg} />
                <VideoDetails>
                  <h5>{title}</h5>
                  <p>{channelTitle}</p>
                </VideoDetails>
              </VideoContent>
            </Link>
          );
        })}
    </>
  );
};

export default PlayList;
