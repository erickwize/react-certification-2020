import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout';

function VideoDetail() {
  const { id } = useParams();

  return <Layout>{id}</Layout>;
}

export default VideoDetail;
