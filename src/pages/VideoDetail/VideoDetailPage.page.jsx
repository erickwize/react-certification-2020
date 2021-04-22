import React, { useRef } from 'react';
import { Content, Section } from './VideoDetailPage.styled';
import Header from '../../components/Header';
import VideoDetail from '../../components/VideoDetail';
import VideoFavoriteDetail from '../../components/VideoFavoriteDetail';

function VideoDetailPage({ favorite }) {
  const sectionRef = useRef(null);

  return (
    <Section className="videodetailpage" ref={sectionRef}>
      <Header />
      <Content>{favorite ? <VideoFavoriteDetail /> : <VideoDetail />}</Content>
    </Section>
  );
}

export default VideoDetailPage;
