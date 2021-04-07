import React from 'react';
import { useHistory } from 'react-router-dom';

import { SearchDiv, InputElement } from './Search.styled';

const Search = ({ handleChange }) => {
  const history = useHistory();

  const onHandleSearch = (event) => {
    if (event.key === 'Enter') {
      handleChange(event.target.value);
      history.push('/');
    }
  };

  return (
    <SearchDiv>
      <InputElement
        className="inputSearch"
        type="search"
        placeholder="Buscar contenido"
        onKeyDown={onHandleSearch}
      />
    </SearchDiv>
  );
};

export default Search;
