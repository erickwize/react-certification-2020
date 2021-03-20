import React from 'react';
// import { useHistory } from 'react-router-dom';
import videos from '../../mock/youtube-videos-mock.json';
import VideoCard from '../../components/VideoCard';
import { Container, Title, VideoGrid } from './Home.styles';
// import { useAuth } from '../../providers/Auth';
import './Home.styles.js';

function HomePage() {
  // const history = useHistory();
  
  //const { logout } = useAuth();
  const { items = [] } = videos;

  const videosList = items.map((video) => {
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

  // function deAuthenticate(event) {
  //   event.preventDefault();
  //   logout();
  //   history.push('/');
  // }

  return (
    <Container>
      <Title>Mini Challenge 1</Title>
      <VideoGrid>{videosList}</VideoGrid>
    </Container>
  );
}

export default HomePage;
