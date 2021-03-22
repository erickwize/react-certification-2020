import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from '../core/Navbar';

import Sidebar from '../core/Sidebar';

import AppContent from '../core/AppContent';

import BlankPage from '../core/BlankPage';

import HomePage from '../../pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Sidebar />
          <main className="wrapper">
            <Navbar />
            <AppContent>
              <HomePage />
            </AppContent>
          </main>
        </Route>
        <Route exact path="/not-authorized">
          <Sidebar />
          <main className="wrapper">
            <Navbar />
            <AppContent>
              <BlankPage />
            </AppContent>
          </main>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
