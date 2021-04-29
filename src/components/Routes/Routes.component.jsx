import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import VideoPlayer from '../../pages/VideoPlayer';
import UserLogin from '../../pages/Login';
import UserFavorites from '../../pages/Favs';

import Private from '../Private';
// import VideoComments from '../VideoComments';

export default function Routes({ selectCard, videoList, video, dispatch, favorites }) {
  const loading = videoList ? !videoList.length : true;
  return (
    <>
      <Switch>
        <Route exact path="/">
          {loading ? (
            <h3 data-testid="loading">
              <br />
              Loading...
            </h3>
          ) : (
            <HomePage selectCard={selectCard} videoList={videoList} dispatch={dispatch} />
          )}
        </Route>
        <Route exact path="/login">
          <UserLogin dispatch={dispatch} />
        </Route>
        <Route path="/player/:videoId">
          <VideoPlayer
            video={video}
            selectCard={selectCard}
            relatedVideos={videoList}
            dispatch={dispatch}
          />
        </Route>
        <Route exact path="/user/:account">
          <Private>
            <UserFavorites selectCard={selectCard} dispatch={dispatch} />
            <UserLogin dispatch={dispatch} />
          </Private>
        </Route>
        <Route exact path="/user/player/:videoId">
          <Private>
            <VideoPlayer
              video={video}
              selectCard={selectCard}
              relatedVideos={Object.values(favorites)}
              dispatch={dispatch}
            />
            <UserLogin dispatch={dispatch} />
          </Private>
        </Route>
        <Route path="*">
          <NotFound />s
        </Route>
      </Switch>
    </>
  );
}
