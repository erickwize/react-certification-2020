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
    console.log('GlobalContext:setQueryHandler', q);
    setQuery(q);
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
  const [vidId, setVidId] = useState('');
  const [vidObject, setVidObject] = useState('');
  const setVidIdHandler = (vi) => {
    console.log('GlobalContext:setVidIdHandler', vi);
    setVidId(vi);
  };
  const setVidObjectHandler = (vo) => {
    console.log('GlobalContext:setVidObjectHandler', vo);
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
