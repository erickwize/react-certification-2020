import React, { useLayoutEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import HomeCard from '../../pages/HomeCard';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import Fortune from '../Fortune';
import Layout from '../Layout';
import { random } from '../../utils/fns';
import Navbar from '../Navbar';

function App() {
  useLayoutEffect(() => {
    const { body } = document;

    function rotateBackground() {
      const xPercent = random(100);
      const yPercent = random(100);
      body.style.setProperty('--bg-position', `${xPercent}% ${yPercent}%`);
    }

    const intervalId = setInterval(rotateBackground, 3000);
    body.addEventListener('click', rotateBackground);

    return () => {
      clearInterval(intervalId);
      body.removeEventListener('click', rotateBackground);
    };
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <AuthProvider>
        <Layout>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/home" exact component={HomePage} />
            <Route path="/homecard" exact component={HomeCard} />
            <Route path="/login" exact component={LoginPage} />
            <Private exact path="/secret">
              <SecretPage />
            </Private>
            <Route path="*" exact component={NotFound} />
          </Switch>
          <Fortune />
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
