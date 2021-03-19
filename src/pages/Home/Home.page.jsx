import React, { useState } from 'react';
import { VideoList, HomeTitle } from './Home.styles.jsx';
import mock from './mock/mock.json'
import VideoCard from '../../components/VideoCard'
import { getReadableDate } from '../../utils/fns';

function HomePage() {
  const [videoList, setVideoList] = useState(mock.items)

  const getUsefullData = (videoData, idx) => {
    const { publishedAt, title, channelTitle,
      description, thumbnails } = videoData.snippet
    return {
      uploadDate: getReadableDate(publishedAt),
      thumbnail: thumbnails.medium.url,
      title,
      description,
      channel: channelTitle
    }
  }

  return (
    <section>
    <HomeTitle>
      Welcome y'all!
    </HomeTitle>
    <VideoList>
    {videoList.map((video, idx) =>
        videoList.length && <VideoCard key={video.etag}
                  videoData={getUsefullData(video, idx)} />
      )}
    </VideoList>
    </section>
  );
}

export default HomePage;
