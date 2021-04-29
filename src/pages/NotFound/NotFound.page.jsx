import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/Navbar';
import { useStore } from '../../store/StoreProvider';
import './NotFound.styles.css';

function NotFoundPage() {
  const { theme } = useStore();

  return (
    <section className={`not-found ${theme === "light"?null:"dark404"}`}>
      <NavBar/>
      <h4>404</h4>
      <h5>We're sorry, we're not able to find the page you're looking for</h5>
      <Link to="/" className="home-link">
        Go Back
      </Link>
      <div className="image404">
        <img src="404.gif" alt="page not found" />
      </div>
    </section>
  );
}

export default NotFoundPage;
