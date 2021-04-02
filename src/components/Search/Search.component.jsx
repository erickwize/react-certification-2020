import React from 'react';
import { Wrapper, Icon, Input } from './Search.styled';

function Search({ query, setQuery }) {
  const onChangeHandler = (event) => {
    setQuery(event.target.value);
  };

  return (
    <Wrapper>
      <Icon />
      <Input type="text" value={query} onChange={onChangeHandler} />
    </Wrapper>
  );
}

export default Search;
