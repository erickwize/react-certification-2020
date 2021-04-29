import React, { createContext, useContext, useReducer, useEffect } from 'react';

import { initialState, globalReducer } from './GlobalReducer';
import { AUTH_STORAGE_KEY, THEME_STORAGE, VIDEOS_STORAGE } from '../../utils/constants';
import { auth } from '../../firebase';

const GlobalContext = createContext();

const useGlobalProvider = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(`Can't use "useGlobal" without an GlobalProvider!`);
  }
  return context;
};

function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(globalReducer, initialState);
  const { themeValue, favoriteVideos } = state;

  useEffect(() => {
    window.localStorage.setItem(THEME_STORAGE, themeValue);
  }, [themeValue]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
      } else {
        window.localStorage.removeItem(AUTH_STORAGE_KEY);
      }
    });

    return () => unsubscribe;
  }, []);

  useEffect(() => {
    window.localStorage.setItem(VIDEOS_STORAGE, JSON.stringify(favoriteVideos));
  }, [favoriteVideos]);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

export { useGlobalProvider, GlobalContext };
export default GlobalProvider;
