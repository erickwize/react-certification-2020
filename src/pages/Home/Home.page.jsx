import React from 'react';
import { VideoList, HomeTitle } from './Home.styles';
// import youtubeVideoList from '../../utils/mock/youtube-videos-mock.json';
import VideoCard from '../../components/VideoCard';
import { getReadableDate } from '../../utils/fns';

function HomePage({ videoList, selectCard }) {
  const getUsefullData = (videoData) => {
    const { videoId } = videoData.id;
    const {
      publishedAt,
      title,
      channelTitle,
      description,
      thumbnails,
      channelId,
    } = videoData.snippet;
    return {
      uploadDate: getReadableDate(publishedAt),
      thumbnail: thumbnails.medium.url,
      title,
      description,
      channel: channelTitle,
      channelId,
      videoId,
      link: `https://www.youtube.com/embed/${videoId}`,
    };
  };

  const cardClick = (video) => {
    selectCard(video);
  };

  return (
    <section data-testid="yt-videocard">
      <HomeTitle>Welcome y&#8217;all!</HomeTitle>
      <VideoList>
        {videoList.map((video) => (
          <VideoCard
            key={video.etag}
            videoData={getUsefullData(video)}
            cardClick={cardClick}
          />
        ))}
      </VideoList>
    </section>
  );
}

export default HomePage;
