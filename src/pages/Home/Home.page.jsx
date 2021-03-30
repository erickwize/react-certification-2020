import React, { useEffect, useState } from 'react';
import VideoCard from '../../components/VideoCard';
import { Container, Title, VideoGrid } from './Home.styles';
import './Home.styles.js';


const useFetch = url => {

  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      const item = data.items;
      setVideos(item);
      setLoading(false);
    }
    fetchData();
  });
  return{videos, loading}
}

function HomePage() {
  const{videos, loading} = useFetch( 'https://www.googleapis.com/youtube/v3/videos?maxResults=50&part=snippet&chart=mostPopular&key=AIzaSyB_zm0mwpFT9TcRIkaGYxLUChyOyIzmE-E')

  
  const aVideo = videos.map((video) => {
    const {
      etag,
      snippet: {
        title,
        description,
        thumbnails: {
          medium: { url, width, height },
        },
      },
    } = video;
    return <VideoCard key={etag}
      title={title}
      description={description}
      image={url}
      width={width}
      height={height}
    />;
  });

  return (
    <Container>
      <Title>Mini Challenge 1</Title>
      <VideoGrid>
        {loading ? <p>loading</p> : aVideo}
      </VideoGrid>
    </Container>
  );
}

export default HomePage;
