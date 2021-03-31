import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import VideoCard from '../../components/VideoCard';

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const YOUTUBE_API = 'https://www.googleapis.com/youtube/v3/playlistItems';

// export async function getServerSideProps() {
//   const res = await fetch(
//     `${YOUTUBE_API}?part=snippet&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
//   );
//   const data = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// }

function HomePage() {
  const [youtubeVideo, setYoutubeVideo] = useState(null);
  useEffect(() => {
    async function getServerSideProps() {
      const res = await fetch(
        `${YOUTUBE_API}?part=snippet&playlistId=PLyzOXHX-1l7fbbYl3L0xPL482zoeLMhj2&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      );
      const data = await res.json();
      setYoutubeVideo(data);
      console.log(data);
    }
    getServerSideProps();
  }, []);

  return (
    <Layout>
      <section>
        <CardsContainer>
          {youtubeVideo !== null &&
            youtubeVideo.items.map((caja) => (
              <VideoCard
                key={caja.etag}
                title={caja.snippet.title}
                description={caja.snippet.description}
                thumbnail={caja.snippet.thumbnails.default.url}
              />
            ))}
        </CardsContainer>
      </section>
    </Layout>
  );
}

export default HomePage;
