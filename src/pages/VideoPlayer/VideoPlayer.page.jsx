import React from 'react';
import VideoCard from '../../components/VideoCard';
import {
  HomeButton,
  Player,
  PlayerGrid,
  PlayerTitle,
  VideoWrapper,
  PlayerInfo,
  PlayerDesc,
  RelatedVideoWrapper,
} from './VideoPlayer.styles';
import { getUsefullData } from '../../utils/fns';

function VideoPlayer({ video, selectCard, relatedVideos }) {
  const cardClick = (vid) => {
    selectCard(vid);
  };

  const isRelatedView = true;
  return (
    <section data-testid="video-player" className="view-player">
      <HomeButton onClick={() => cardClick({})} type="button">
        Home
      </HomeButton>
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
          <PlayerInfo>{video.channel}</PlayerInfo>
          <PlayerInfo>{video.uploadDate}</PlayerInfo>
          <PlayerDesc>{video.description}</PlayerDesc>
        </VideoWrapper>
        <RelatedVideoWrapper>
          <PlayerTitle>Related Videos:</PlayerTitle>
          {relatedVideos.map((related) => (
            <VideoCard
              key={related.etag}
              videoData={getUsefullData(related)}
              cardClick={cardClick}
              isRelatedView={isRelatedView}
            />
          ))}
        </RelatedVideoWrapper>
      </PlayerGrid>
    </section>
  );
}

export default VideoPlayer;
