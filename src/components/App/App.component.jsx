import React, { useReducer } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { fetchSearchVideos } from '../../utils/endpoints';
import {
  initalState,
  GlobalContext,
  useVideList,
  useVideoInfo,
  reducer,
} from '../../providers/GlobalContext';

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
    dispatch({ type: 'SET_SEARCH_KEYWORD', payload: keyword });
    updateVideoInfo({});
    const search = await fetchSearchVideos(keyword);
    updateVideoList(search.items);
  };

  const selectCard = (videoInfo) => {
    updateVideoInfo(videoInfo);
    const path = videoInfo.title ? `?video=${videoInfo.videoId}` : '/';
    window.history.replaceState({}, videoInfo.title, path);
  };

  return (
    <BrowserRouter data-testid="app-layout">
      <GlobalContext.Provider value={state}>
        <HeaderMenu doSearch={doSearch} dispatch={dispatch} />
        <AuthProvider>
          <Layout>
            <Switch>
              <Route path="/">
                {video.title ? (
                  <VideoPlayer
                    video={video}
                    selectCard={selectCard}
                    relatedVideos={videoList}
                  />
                ) : (
                  <HomePage selectCard={selectCard} videoList={videoList} />
                )}
              </Route>
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
      </GlobalContext.Provider>
    </BrowserRouter>
  );
}

export default App;
