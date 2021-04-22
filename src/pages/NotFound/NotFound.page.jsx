import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { useGlobal } from '../../providers/Global.provider';

export const GlobalStyle = createGlobalStyle`
    body{
        background-color: ${props => props.theme.body.backgroundColor};
        color: ${props => props.theme.body.color}
    }
`;

export const Container = styled.section`
  display: grid;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  width: 100%;
`;

export const TitleLink = styled.h1`
  text-decoration: underline;
`;

export const ImgContainer = styled.div`
    width: 100%;
    img{
      border-radius: 50%;
    }
`;

function NotFoundPage() {
  const { state } = useGlobal();

  return (
    <Container>
      <GlobalStyle theme={state.theme}/>
      <h1>There's nothing to see here</h1>
      <Link to="/" className="home-link">
        <TitleLink>Go home! &#x27A1;</TitleLink>
      </Link>
      <ImgContainer>      
        <img src="404.gif" alt="page not found" />
      </ImgContainer>
    </Container>
  );
}

export default NotFoundPage;
