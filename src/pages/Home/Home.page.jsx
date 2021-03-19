import React, { useState, useEffect } from 'react';
import { VideoList, HomeTitle } from './Home.styles.jsx';
import youtubeVideoList from '../../utils/mock/youtube-videos-mock.json'
import VideoCard from '../../components/VideoCard'
import { getReadableDate } from '../../utils/fns';

function HomePage() {
  const [videoList, setVideoList] = useState([])

  useEffect(() => {
    const getList = async () => {
      let listItems = []
      try {
        listItems = await youtubeVideoList.items
      } catch {
        console.info('Error reading json file: youtubeVideoList')
      }
      setVideoList(listItems)
      }
      getList()
    }, [videoList])

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
        <VideoCard
          key={video.etag}
          videoData={getUsefullData(video, idx)}
        />)}
    </VideoList>
    </section>
  );
}

export default HomePage;
