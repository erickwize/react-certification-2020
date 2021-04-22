import React, { useState, useContext } from 'react';
import { Wrapper, Input, Button } from './Search.styled';
import { GlobalContext } from '../../context/GlobalContext';

function Search() {
  const globalContext = useContext(GlobalContext);
  const [localQuery, setLocalQuery] = useState(globalContext.query);
  const textInput = React.createRef();
  // console.log('SearchComponent:globalContext', globalContext);
  const onChangeHandler = (event) => {
    setLocalQuery(event.target.value);
  };
  const onClickHandler = () => {
    globalContext.setQuery(textInput.current.value);
  };
  const onKeyPressHandler = (e) => {
    if (e.key === 'Enter') {
      globalContext.setQuery(textInput.current.value);
    }
  };

  return (
    <Wrapper>
      <Input
        type="text"
        ref={textInput}
        value={localQuery}
        onChange={onChangeHandler}
        onKeyPress={onKeyPressHandler}
      />
      <Button onClick={onClickHandler}>🔍</Button>
    </Wrapper>
  );
}

export default Search;
