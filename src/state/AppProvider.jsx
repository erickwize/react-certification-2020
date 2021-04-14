import React, { createContext, useContext, useState } from 'react';

import Theme, { themes } from './ThemeProvider';

const AppContext = createContext({
  searchValue: '',
  // eslint-disable-next-line
  setTheme: () => { },
  theme: {},
});

function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(`Can't use "useAppContext" without a AppContext!`);
  }
  return context;
}

function AppProvider({ children }) {
  const [theme, setTheme] = useState(themes.dark);
  const [searchValue, setSearchValue] = useState('Wizeline');

  return (
    <Theme theme={theme}>
      <AppContext.Provider value={{ searchValue, setSearchValue, setTheme, theme }}>
        {children}
      </AppContext.Provider>
    </Theme>
  );
}

export { useAppContext };
export default AppProvider;
