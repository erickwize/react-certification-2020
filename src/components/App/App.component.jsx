import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import Private from '../Private';
import Layout from '../Layout';
import VideoPlayer from '../VideoPlayer';
import HeaderMenu from '../Header';

import { random } from '../../utils/fns';

function App() {
  const doSearch = (keyword) => {
    console.log('DOSEARCH: ', keyword);
  };

  return (
    <BrowserRouter>
      <HeaderMenu doSearch={doSearch} />
      <AuthProvider>
        <Layout>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/:videoId">
              <VideoPlayer />
            </Route>
            <Private exact path="/secret">
            HELLO
            </Private>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
