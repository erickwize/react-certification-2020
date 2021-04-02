import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext('');

function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error(`Can't use "useSearch" without a SearchProvider!`);
  }
  return context;
}

function SearchProvider({ children }) {
  const [search, setSearch] = useState('wizeline');

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

export { useSearch };

export default SearchProvider;
