import React from 'react';
import { Input, InputContainer, Icon } from './Seacrh.styles';

const Search = () => (
  <InputContainer>
    <Icon />
    <Input type="text" readOnly value="wizeline" />
  </InputContainer>
);

export default Search;
