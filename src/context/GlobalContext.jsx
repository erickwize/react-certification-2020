import React, { useState } from 'react';

const themes = {
  light: {
    background: '#ffffff',
    text: '#000000',
    primary: '#70dbcd',
    primary_shadow: '#409287',
  },
  dark: {
    background: '#000000',
    text: '#ffffff',
    primary: '#409287',
    primary_shadow: '#70dbcd',
  },
};

export const GlobalContext = React.createContext({
  search: {
    query: '',
    setQuery: () => {},
  },
  theme: {
    themeId: '',
    setThemeId: () => {},
    colors: {},
  },
  video: {
    vidId: '',
    setVidId: () => {},
    vidObject: {},
    setVidObject: () => {},
  },
});

const GlobalContextProvider = (props) => {
  const [theQuery, setTheQuery] = useState('');
  const setQueryHandler = (query) => {
    console.log(query);
    setTheQuery(query);
  };
  const [themeId, setThemeId] = useState('light');
  const [colors, setColors] = useState(themes.light);
  const toggleTheme = () => {
    if (themeId === 'light') {
      setThemeId('dark');
      setColors(themes.dark);
    } else if (themeId === 'dark') {
      setThemeId('light');
      setColors(themes.light);
    }
  };
  const [cVideo, setCVideo] = useState('');
  const setCVideoHandler = (vid) => {
    console.log('GlobalContext', vid);
    setCVideo(vid);
  };
  const searchObject = { query: theQuery, setQuery: setQueryHandler };
  const themeObject = { themeId, toggleTheme, colors };
  const videoObject = {
    currVid: cVideo,
    setCurrVid: setCVideoHandler,
  };
  return (
    <GlobalContext.Provider
      value={{ search: searchObject, theme: themeObject, video: videoObject }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
