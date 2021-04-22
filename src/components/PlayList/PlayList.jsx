import React from 'react';
import { Link } from 'react-router-dom';
import { VideoContent, VideoImagen, VideoDetails } from './PlayList.styled';
import { selectVideo } from '../../store/global/GlobalAction';
import useVideoList from '../../utils/hooks/useFetch';
import { useGlobalProvider } from '../../store/global/global.provider';

const PlayList = ({ videoId }) => {
  const { videosRelated, error } = useVideoList(videoId);
  const { dispatch } = useGlobalProvider();

  const onSelectVideo = (videoSelected) => {
    selectVideo(dispatch, videoSelected);
  };

  if (error) return <>Network error</>;

  return (
    <>
      {videosRelated?.items &&
        videosRelated.items.map((video) => {
          const snippet = video?.snippet ? video.snippet : false;
          if (!snippet) return null;

          const { title, channelTitle, description } = snippet;
          const { url } = snippet.thumbnails.medium;
          const { videoId: id } = video.id;
          return (
            <Link
              key={id}
              onClick={() =>
                onSelectVideo({ title, channelTitle, description, url, videoId: id })
              }
              to={{
                pathname: `/video/${id}`,
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
    </>
  );
};

export default PlayList;
