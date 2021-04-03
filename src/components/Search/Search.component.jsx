import React, {useState} from 'react';
import useInput from './../../utils/hooks/useInput';
import { Input, InputContainer, Icon } from './Search.styles';

function Search() {

  const [value, handleInputChange] = useInput('wizeline');

  const submit = e => {
    e.preventDefault();
   console.log(value)
  }

  return(
    <InputContainer onSubmit={submit}>
    <Icon />
      <Input value={value} onChange={handleInputChange} type="text" />
    </InputContainer>
  )
};

export default Search;
