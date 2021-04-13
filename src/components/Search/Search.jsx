import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { SearchDiv, InputElement } from './Search.styled';
import { fetchVideos, onChangeSearch } from '../../store/global/GlobalAction';
import { useGlobalProvider } from '../../store/global/Global.provider';

const Search = () => {
  const history = useHistory();
  const {
    state: { searchValue },
    dispatch,
  } = useGlobalProvider();

  const onHandleSearch = (event) => {
    const { value } = event.target;
    if (event.key === 'Enter') {
      onChangeSearch(dispatch, value);
      history.push('/');
    }
  };

  useEffect(() => {
    fetchVideos(dispatch, searchValue, false);
  }, [dispatch, searchValue]);

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
