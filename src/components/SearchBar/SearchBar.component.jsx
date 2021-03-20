import React from 'react';
import styled from 'styled-components';

const SearchbarContainer = styled.div`
  padding: 0 2rem;
`;

const Searchbar = styled.div`
  display: flex;
  align-items: center;
  background-color: seashell;
  border-radius: 5px;
`;

const InputSearchbar = styled.input`
  width: 11rem;
  border: none;
  &:focus {
    outline: none;
  }
`;

const SearchBar = () => (
  <SearchbarContainer>
    <Searchbar>
      <span className="material-icons-outlined">search</span>
      <InputSearchbar type="text" />
    </Searchbar>
  </SearchbarContainer>
);

export default SearchBar;
