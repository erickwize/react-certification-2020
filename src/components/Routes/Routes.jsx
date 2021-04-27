import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import HomePage from '../../pages/Home';
import Video from '../../pages/Video';
import LoginPage from '../../pages/Login';
import Favorites from '../../pages/Favorites';
import FavoriteVideo from '../../pages/FavoriteVideo';
import NotFound from '../../pages/NotFound';
import Private from '../Private';

const Routes = () => {
  const location = useLocation();
  const background = location.state && location.state.background;
  return (
    <>
      <Switch location={background || location}>
        <Route exact path="/" component={HomePage} />
        <Route path="/video/:videoId" component={Video} />
        <Private exact path="/favorites" component={Favorites} />
        <Private path="/favorites/:videoId" component={FavoriteVideo} />
        <Route path="/login" component={LoginPage} />
        <Route path="*" component={NotFound} />
      </Switch>
      {background && <Route path="/login" component={LoginPage} />}
    </>
  );
};

export default Routes;
