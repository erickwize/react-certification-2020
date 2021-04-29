import React, { useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Content, Section, Title, Emoji, Button } from './Favorite.styled';
import Header from '../../components/Header';
import FavoritesHome from '../../components/FavoritesHome';
import { GlobalContext } from '../../context/GlobalContext';

import { useAuth } from '../../providers/Auth';

function FavoritePage() {
  const sectionRef = useRef(null);
  const { authenticated } = useAuth();
  const globalContext = useContext(GlobalContext);

  return (
    <Section className="FavoritePage" ref={sectionRef}>
      <Header />
      {authenticated ? (
        <>
          <Title theme={globalContext.colors}>My favorites</Title>
          <FavoritesHome />
        </>
      ) : (
        <Content theme={globalContext.colors}>
          <Emoji>
            <span role="img" aria-label="oops emoji">
              🤭
            </span>
          </Emoji>
          <Title theme={globalContext.colors}>
            Please sign in to see your favorites.
          </Title>
          <Button theme={globalContext.colors}>
            <Link to="/login">Login</Link>
          </Button>
        </Content>
      )}
    </Section>
  );
}

export default FavoritePage;
