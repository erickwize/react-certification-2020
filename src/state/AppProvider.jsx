import React, { createContext, useContext } from 'react';

import Theme from './ThemeProvider';

const AppContext = createContext({
  searchValue: 'Wizeline',
});

function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(`Can't use "useAppContext" without a AppContext!`);
  }
  return context;
}

function AppProvider({ children }) {
  return (
    <Theme>
      <AppContext.Provider value={{ searchValue: 'Wizeline' }}>
        {children}
      </AppContext.Provider>
    </Theme>
  );
}

export { useAppContext };
export default AppProvider;
