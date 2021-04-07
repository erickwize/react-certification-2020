import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useVideList } from '../../utils/hooks/useVideoList';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';
import VideoPlayer from '../../pages/VideoPlayer';
import HeaderMenu from '../Header';

function App() {
  const { videoList, isLoading } = useVideList([]);
  const [video, setVideo] = useState({});

  const doSearch = (keyword) => {
    console.log('DOSEARCH: ', keyword);
    return keyword;
  };

  const selectCard = (videoInfo) => {
    setVideo(videoInfo);
    window.history.replaceState({}, videoInfo.title, `?video=${videoInfo.videoId}`);
  };

  return (
    <BrowserRouter>
      <HeaderMenu doSearch={doSearch} />
      <AuthProvider>
        <Layout>
          <Switch>
            <Route path="/">
              {video.title ? (
                <VideoPlayer video={video} />
              ) : (
                <HomePage
                  videoList={videoList}
                  selectCard={selectCard}
                  isLoading={isLoading}
                />
              )}
            </Route>
            <Route exact path="/login">
              <LoginPage />
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
    </BrowserRouter>
  );
}

export default App;
