import React from 'react';
import VideoCard from '../../components/VideoCard';
import {
  Player,
  PlayerGrid,
  PlayerTitle,
  VideoWrapper,
  PlayerInfo,
  PlayerDesc,
  RelatedVideoWrapper,
} from './VideoPlayer.styles';
import { getUsefullData } from '../../utils/fns';

function VideoPlayer({ video, selectCard, relatedVideos, dispatch }) {
  const isRelatedView = true;
  const cardClick = (vid) => {
    selectCard(vid);
  };

  const relatedVideoCards = (related) => {
    const videoData = related.id ? getUsefullData(related) : related;
    const hideCard = related.id
      ? related.id.videoId !== video.videoId
      : video.videoId !== related.videoId;
    return hideCard ? (
      <VideoCard
        key={related.etag}
        videoData={videoData}
        cardClick={cardClick}
        isRelatedView={isRelatedView}
        dispatch={dispatch}
      />
    ) : null;
  };

  return (
    <section data-testid="video-player" className="view-player">
      <PlayerGrid>
        <VideoWrapper>
          <Player
            src={video.link}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <PlayerTitle>{video.title}</PlayerTitle>
          <PlayerInfo>
            {video.channel} | {video.uploadDate}
          </PlayerInfo>
          <PlayerDesc>{video.description}</PlayerDesc>
        </VideoWrapper>
        <RelatedVideoWrapper>
          <PlayerTitle>Related Videos:</PlayerTitle>
          {relatedVideos.map((related) => relatedVideoCards(related))}
        </RelatedVideoWrapper>
      </PlayerGrid>
    </section>
  );
}

export default VideoPlayer;
