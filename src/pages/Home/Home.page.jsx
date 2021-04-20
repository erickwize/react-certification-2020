import React from 'react';

import { HomeSection, Title, VideoContainer } from './Home.styled';
import { VideoCard } from '../../components';
import { useGlobalProvider } from '../../store/global/global.provider';

function HomePage() {
  const {
    state: { fetchingVideo, videoList, error },
  } = useGlobalProvider();

  if (fetchingVideo) return <>Loading...</>;

  if (error) return <>Network error</>;

  return (
    <>
      <HomeSection>
        <Title>
          <h1>Enjoy watching!</h1>
        </Title>
        <VideoContainer>
          {videoList?.items?.length > 0 &&
            videoList.items.map((video) => {
              const { title, description, channelTitle } = video?.snippet;
              const { url } = video?.snippet.thumbnails.medium;
              const videoId = video?.id?.videoId;
              return (
                <VideoCard
                  key={video.etag}
                  data={{ title, description, videoId, channelTitle, url }}
                />
              );
            })}
        </VideoContainer>
      </HomeSection>
    </>
  );
}

export default HomePage;
