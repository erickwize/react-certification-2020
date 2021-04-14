import React, { useReducer } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useVideList, useVideoInfo } from '../../utils/hooks/useVideoStates';
import { fetchSearchVideos } from '../../utils/endpoints';
import {
  VideoListContext,
  initalState,
  StyleContext,
  reducer,
} from '../../utils/hooks/useContext';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';
import VideoPlayer from '../../pages/VideoPlayer';
import HeaderMenu from '../Header';

function App() {
  const { videoList, updateVideoList } = useVideList([]);
  const { video, updateVideoInfo } = useVideoInfo({});
  const [state, dispatch] = useReducer(reducer, initalState);

  const doSearch = async (keyword) => {
    console.log('keyword', keyword);
    updateVideoInfo({});
    const search = await fetchSearchVideos(keyword);
    updateVideoList(search.items);
    return search;
  };

  const selectCard = (videoInfo) => {
    updateVideoInfo(videoInfo);
    const path = videoInfo.title ? `?video=${videoInfo.videoId}` : '/';
    window.history.replaceState({}, videoInfo.title, path);
  };

  return (
    <BrowserRouter data-testid="app-layout">
      <StyleContext.Provider value={state}>
        <HeaderMenu doSearch={doSearch} dispatch={dispatch} />
        <AuthProvider>
          <Layout>
            <Switch>
              <VideoListContext.Provider value={videoList}>
                <Route path="/">
                  {video.title ? (
                    <VideoPlayer video={video} selectCard={selectCard} />
                  ) : (
                    <HomePage selectCard={selectCard} />
                  )}
                </Route>
              </VideoListContext.Provider>
              <Route exact path="/login">
                Login
              </Route>
              <Route path="/videoplayer">
                <VideoPlayer video={video} />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Layout>
        </AuthProvider>
      </StyleContext.Provider>
    </BrowserRouter>
  );
}

export default App;
