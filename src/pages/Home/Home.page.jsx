import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import VideoCard from '../../components/VideoCard';
import videos from '../../mockData/videos';

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function HomePage() {
  return (
    <Layout>
      <section>
        <CardsContainer>
          {videos.items.map((video) => (
            <VideoCard
              key={video.etag}
              title={video.snippet.title}
              description={video.snippet.description}
              thumbnail={video.snippet.thumbnails.default.url}
            />
          ))}
        </CardsContainer>
      </section>
    </Layout>
  );
}

export default HomePage;
