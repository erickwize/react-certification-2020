import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import Layout from '../Layout';

//Components
import { Header } from '../../components/Header/Header.component';
import { VideoDetail } from '../../components/VideoDetail/VideoDetail.component';
import GlobalProvider from '../../providers/Global.provider';
import { FavoriteVideos } from '../FavoriteVideos/FavoriteVideos.component';
import { FavoriteVideoDetail } from '../FavoriteVideoDetail/FavoriteVideoDetail.component';
import { Modal } from '../Modal/Modal.component';
import { Menu } from '../Menu/Menu.component';

function App() {

  return (
    <BrowserRouter>
      <GlobalProvider>
        <Menu/>
        <Header/>
            <Layout>
              <Switch>
                <Route exact path="/">
                  <HomePage/>
                </Route>
                <Route exact path="/video/:videoId">
                  <VideoDetail/>
                </Route>
                <Route exact path="/login">
                  <Modal >
                    <LoginPage/>
                  </Modal>
                  {/* <LoginPage /> */}
                </Route>
                <Private exact path="/secret">
                  <SecretPage />
                </Private>
                <Private exact path="/favorites">
                  <FavoriteVideos />
                </Private>
                <Private exact path="/favorites/:videoId">
                  <FavoriteVideoDetail />
                </Private>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </Layout>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
