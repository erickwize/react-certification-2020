import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Content, Section, Title, Emoji } from './Favorite.styled';
import Header from '../../components/Header';
import FavoritesHome from '../../components/FavoritesHome';

import { useAuth } from '../../providers/Auth';

function FavoritePage() {
  const sectionRef = useRef(null);
  const { authenticated } = useAuth();

  return (
    <Section className="FavoritePage" ref={sectionRef}>
      <Header />
      {authenticated ? (
        <>
          <Title>My favorites</Title>
          <FavoritesHome />
        </>
      ) : (
        <Content>
          <Emoji>🤭</Emoji>
          <Title>Please sign in to see your favorites.</Title>
          <Title>
            <Link to="/login">Login</Link>
          </Title>
        </Content>
      )}
    </Section>
  );
}

export default FavoritePage;
