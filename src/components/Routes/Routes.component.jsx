import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import VideoPlayer from '../../pages/VideoPlayer';
import UserLogin from '../../pages/Login';

export default function Routes({ selectCard, videoList, video }) {
  const loading = !videoList.length;

  return (
    <>
      <Switch>
        <Route exact path="/">
          {loading ? (
            <h3>
              <br />
              Loading...
            </h3>
          ) : (
            <HomePage selectCard={selectCard} videoList={videoList} />
          )}
        </Route>
        <Route exact path="/login">
          <UserLogin />
        </Route>
        <Route path="/player/:videoId">
          <VideoPlayer video={video} selectCard={selectCard} relatedVideos={videoList} />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}
