import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import { storage } from '../../utils/storage';
import { AUTH_STORAGE_KEY } from '../../utils/constants';

import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import VideoPlayer from '../../pages/VideoPlayer';
import UserLogin from '../../pages/Login';
import UserFavorites from '../../pages/Favs';

export default function Routes({ selectCard, videoList, video, dispatch, favorites }) {
  const loading = !videoList.length;
  const history = useHistory();

  const isUserAuthenticated = (component) => {
    return storage.get(AUTH_STORAGE_KEY) ? <> {component} </> : history.push(`/login`);
  };

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
          {isUserAuthenticated(
            <UserFavorites selectCard={selectCard} dispatch={dispatch} />
          )}
        </Route>
        <Route exact path="/user/player/:videoId">
          {isUserAuthenticated(
            <VideoPlayer
              video={video}
              selectCard={selectCard}
              relatedVideos={Object.values(favorites)}
              dispatch={dispatch}
            />
          )}
        </Route>
        <Route path="*">
          <NotFound />s
        </Route>
      </Switch>
    </>
  );
}
