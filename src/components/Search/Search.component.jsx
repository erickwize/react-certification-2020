import React, { useContext } from 'react';
import { Wrapper, Icon, Input } from './Search.styled';
import { GlobalContext } from '../../context/GlobalContext';

function Search() {
  const globalContext = useContext(GlobalContext);
  console.log('SearchComponent:globalContext', globalContext);
  const onChangeHandler = (event) => {
    globalContext.search.setQuery(event.target.value);
  };

  return (
    <Wrapper>
      <Icon />
      <Input
        type="text"
        value={globalContext.search.theQuery}
        onChange={onChangeHandler}
      />
    </Wrapper>
  );
}

export default Search;
