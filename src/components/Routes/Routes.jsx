import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../../pages/Home';
import Video from '../../pages/Video';
import LoginPage from '../../pages/Login';
import Favorites from '../../pages/Favorites';
import FavoriteVideo from '../../pages/FavoriteVideo';
import NotFound from '../../pages/NotFound';
import Private from '../Private';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/video/:videoId" component={Video} />
        <Private exact path="/favorites" component={Favorites} />
        <Private path="/favorites/:videoId" component={FavoriteVideo} />
        <Route path="/login" component={LoginPage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
};

export default Routes;
