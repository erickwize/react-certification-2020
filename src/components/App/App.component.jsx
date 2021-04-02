import React, { useState } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import useYoutubeSearchApi from '../../hooks/useYoutubeSearchApi';

import Navbar from '../Navbar';
import HomePage from '../../pages/Home';
import VideoDetail from '../../pages/VideoDetail';

function App() {
  const [searchValue, setSearchValue] = useState('wizeline');
  const [isLoading, videoList] = useYoutubeSearchApi(searchValue);
  return (
    <div>
      <Router>
        <Navbar searchValue={searchValue} setSearchValue={setSearchValue} />
        <Switch>
          <Route path="/video/:video">
            <VideoDetail />
          </Route>
          <Route path="/">
            <HomePage videos={videoList} isLoading={isLoading} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
