import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import Header from './components/Header';
import './global.css';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
