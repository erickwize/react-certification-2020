import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../../pages/Home/Home.page';
import Layout from '../Atoms/Layout/index';
import Header from '../Organisms/Header/index';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Layout>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
