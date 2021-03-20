import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Navbar from "../../components/Layout/Navbar";
import styled from 'styled-components';
import CardVideo from "../../components/Layout/CardVideo";
import {listVideos} from "../../utils/mocks/youtube-videos-mock";
import { useAuth } from '../../providers/Auth';
import './Home.styles.css';

function HomePage() {
  const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 50px 50px 0 50px;
    justify-content: center;
  `;

  return (
    <>
      <Navbar/>
      <CardsContainer>
        {listVideos.items.map((item)=>{return <CardVideo key={item.etag} item={{item}}/>})}
      </CardsContainer>
    </>
  );
}

export default HomePage;
