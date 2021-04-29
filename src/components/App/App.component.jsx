import React, { useReducer } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { fetchSearchVideos } from '../../api';
import {
  initalState,
  GlobalContext,
  useVideList,
  useVideoInfo,
  reducer,
} from '../../providers/GlobalContext';
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
    try {
      const search = await fetchSearchVideos(keyword);
      updateVideoList(search ? search.items : []);
    } catch (e) {
      updateVideoList([]);
      console.info('stuff', videoList);
    }
  };

  const selectCard = (videoInfo) => {
    updateVideoInfo(videoInfo);
  };

  return (
    <BrowserRouter data-testid="app-layout">
      <GlobalContext.Provider value={state}>
        <HeaderMenu doSearch={doSearch} dispatch={dispatch} />
        <Layout>
          <Routes
            video={video}
            selectCard={selectCard}
            videoList={videoList}
            dispatch={dispatch}
            favorites={state.favoritesList}
          />
        </Layout>
      </GlobalContext.Provider>
    </BrowserRouter>
  );
}

export default App;
