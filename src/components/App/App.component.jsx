import React, { useReducer } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { fetchSearchVideos } from '../../utils/endpoints';
import {
  initalState,
  GlobalContext,
  useVideList,
  useVideoInfo,
  reducer,
} from '../../providers/GlobalContext';

import AuthProvider from '../../providers/Auth';
import HeaderMenu from '../Header';
import Layout from '../Layout';
import Routes from '../Routes';

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
            <Routes video={video} selectCard={selectCard} videoList={videoList} />
          </Layout>
        </AuthProvider>
      </GlobalContext.Provider>
    </BrowserRouter>
  );
}

export default App;
