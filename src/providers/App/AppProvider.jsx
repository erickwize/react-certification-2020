import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  createContext,
} from 'react';

import Config from '../../utils/constants';
import { storage } from '../../utils/storage';

const AppContext = createContext({
  setSearch: () => {},
  search: '',
});
function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("Can't use 'useApp' without an AppProvider");
  }
  return context;
}

function AppProvider({ children }) {
  const [search, setSearch] = useState('wizeline');
  return (
    <AppContext.Provider value={{ search, setSearch }}>{children}</AppContext.Provider>
  );
}
export { useApp, AppContext };
export default AppProvider;
