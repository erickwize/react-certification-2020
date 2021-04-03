import React from 'react';
import { Link } from 'react-router-dom';
import { VideoContent, VideoImagen, VideoDetails } from './PlayList.styled';

const PlayList = ({ listItems, handlePlayVideo }) => {
  const onHandleVideo = ({ videoId, title, description, channelTitle }) => {
    handlePlayVideo({ videoId, title, description, channelTitle });
  };

  return (
    <>
      {listItems?.items &&
        listItems.items.map((video) => {
          const { title, channelTitle, description } = video.snippet;
          const sourceImg = video.snippet.thumbnails.default.url;
          const { videoId } = video.id;
          return (
            <Link
              key={videoId}
              onClick={() => onHandleVideo({ videoId, title, description, channelTitle })}
              to={{
                pathname: `/video/${videoId}`,
                data: { data: video, videoList: listItems },
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
