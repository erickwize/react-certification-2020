import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { VideosGrid } from '../../components/VideosGrid/VideosGrid.component';
import { useFetchVideos } from '../../utils/hooks/useFetchVideos';
import './Home.styles.css';
import styled from 'styled-components';
import { useGlobal } from '../../providers/Global.provider';

const IconsInfoContainer = styled.div`
  color: ${props => props.theme.iconsInfoContainer.color};
`;

function HomePage({setSelectedVideo}) {

  const { state, dispatch } = useGlobal();
  const {videos: data, loading} = useFetchVideos(state.search);

  const history = useHistory();
  const sectionRef = useRef(null);

  function deAuthenticate(event) {
    event.preventDefault();
    dispatch({type:'logout'});
    history.push('/');
  }

  return (
    <section className="homepage" ref={sectionRef}>
      {loading && <p>Loading</p>}
      {!loading && <VideosGrid data={data} setSelectedVideo={setSelectedVideo}/>}
      
      <h1>Hello stranger!</h1>
      {state.user.authenticated ? (
        <>
          <h2>Good to have you back</h2>
          <span>
            <Link to="/" onClick={deAuthenticate}>
              ← logout
            </Link>
            <span className="separator" />
            <Link to="/secret">show me something cool →</Link>
          </span>
        </>
      ) : (
        <Link to="/login">let me in →</Link>
      )}    
      
    <IconsInfoContainer theme={state.theme}>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></IconsInfoContainer>
    <IconsInfoContainer theme={state.theme}>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.com</a></IconsInfoContainer>
    </section>
  );
}

export default HomePage;
