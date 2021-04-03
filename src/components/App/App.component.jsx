import React, { useState } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
// import Fortune from '../Fortune';
import Layout from '../Layout';

//Components
import { Header } from '../../components/Header/Header.component';
import { VideoDetail } from '../../components/VideoDetail/VideoDetail.component';

function App() {

  const [searchValue, setSearchValue] = useState('doggos');

  return (  
    <BrowserRouter>
      <Header setSearchValue={setSearchValue}/>
      <AuthProvider>
        <Layout>
          <Switch>
            <Route exact path="/">
              <HomePage searchValue={searchValue}/>
            </Route>
            <Route exact path="/:videoId">
              <VideoDetail/>
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Private exact path="/secret">
              <SecretPage />
            </Private>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          {/* <Fortune /> */}
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
