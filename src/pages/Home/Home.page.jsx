import React, { useRef } from 'react';
import { VideosGrid } from '../../components/VideosGrid/VideosGrid.component';
import { useFetchVideos } from '../../utils/hooks/useFetchVideos';
import './Home.styles.css';
import styled from 'styled-components';
import { useGlobal } from '../../providers/Global.provider';

const IconsInfoContainer = styled.div`
  color: ${props => props.theme.iconsInfoContainer.color};
`;

function HomePage({setSelectedVideo}) {

  const { state } = useGlobal();
  const {videos: data, loading} = useFetchVideos(state.search);
  const sectionRef = useRef(null);

  return (
    <section className="homepage" ref={sectionRef}>
      {loading && <p>Loading</p>}
      {!loading && <VideosGrid data={data} setSelectedVideo={setSelectedVideo}/>}  
      
    <IconsInfoContainer theme={state.theme}>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></IconsInfoContainer>
    <IconsInfoContainer theme={state.theme}>Icons made by <a href="https://icon54.com/" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.com</a></IconsInfoContainer>
    </section>
  );
}

export default HomePage;
