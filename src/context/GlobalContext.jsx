import React, { useState } from 'react';

const themes = {
  light: {
    dark: '#262E30',
    light: '#f0f0f0',
    text: '#262E30',
    background: '#DDDDDD',
    contrast: '#E93D44',
    contrast_light: '#fa5b60',
    contrast_shadow: '#cc2329',
    primary: '#F5B335',
    primary_light: '#ffcf76',
    primary_shadow: '#db9717',
    secondary: '#902E57',
    secondary_light: '#a35374',
    secondary_shadow: '#721a3f',
    toolbar_bg: '#262E30',
    toolbar_text: '#f0f0f0',
    toolbar_shadow: '#E93D44',
  },
  dark: {
    dark: '#262E30',
    light: '#f0f0f0',
    text: '#DDDDDD',
    background: '#262E30',
    primary: '#E93D44',
    primary_light: '#fa5b60',
    primary_shadow: '#cc2329',
    secondary: '#902E57',
    secondary_light: '#a35374',
    secondary_shadow: '#721a3f',
    contrast: '#F5B335',
    contrast_light: '#ffcf76',
    contrast_shadow: '#db9717',
    toolbar_bg: '#721a3f',
    toolbar_text: '#f0f0f0',
    toolbar_shadow: '#ffcf76',
  },
};

export const GlobalContext = React.createContext({
  query: '',
  setQuery: () => {},
  themeId: '',
  setThemeId: () => {},
  colors: {},
  vidId: '',
  setVidId: () => {},
  vidObject: {},
  setVidObject: () => {},
  sessionData: null,
  setSessionData: () => {},
  favorites: [],
  setFavorites: () => {},
});

const GlobalContextProvider = (props) => {
  const [query, setQuery] = useState('');
  const setQueryHandler = (q) => {
    // console.log('GlobalContext:setQueryHandler', q);
    setQuery(q);
  };

  const themeStorage = window.localStorage;
  const savedTheme = themeStorage.getItem('theme');
  const [themeId, setThemeId] = useState(savedTheme || 'light');
  const [colors, setColors] = useState(
    savedTheme === 'light' ? themes.light : themes.dark
  );
  const toggleTheme = () => {
    if (themeId === 'light') {
      setThemeId('dark');
      setColors(themes.dark);
      themeStorage.setItem('theme', 'dark');
    } else if (themeId === 'dark') {
      setThemeId('light');
      setColors(themes.light);
      themeStorage.setItem('theme', 'light');
    }
  };
  const [vidId, setVidId] = useState('');
  const [vidObject, setVidObject] = useState('');
  const setVidIdHandler = (vi) => {
    // console.log('GlobalContext:setVidIdHandler', vi);
    setVidId(vi);
  };
  const setVidObjectHandler = (vo) => {
    // console.log('GlobalContext:setVidObjectHandler', vo);
    setVidObject(vo);
  };
  const [sessionData, setSessionData] = useState({
    loggedIn: false,
  });
  return (
    <GlobalContext.Provider
      value={{
        query,
        setQuery: setQueryHandler,
        themeId,
        setThemeId,
        toggleTheme,
        colors,
        vidId,
        setVidId: setVidIdHandler,
        vidObject,
        setVidObject: setVidObjectHandler,
        sessionData,
        setSessionData,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
