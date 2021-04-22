import React from 'react';
import { Link } from 'react-router-dom';

import './NotFound.styles.css';

function NotFoundPage() {
  return (
    <section className="not-found">
      <p>Wow! we couldn´t find what you were looking for.</p>
      <p>Try again</p>
      <Link to="/" className="home-link">
        Go to Home
      </Link>
    </section>
  );
}

export default NotFoundPage;
