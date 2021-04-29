import React from 'react';
import { Link } from 'react-router-dom';

import { Section, Title, Imagen } from './NotFound.styled';

function NotFoundPage() {
  return (
    <Section className="not-found">
      <Title>Page not found</Title>
      <Imagen src="404.gif" alt="page not found" />
      <Link to="/" className="home-link">
        Return Home
      </Link>
    </Section>
  );
}

export default NotFoundPage;
