import React, { useState } from 'react';
import useInput from './../../utils/hooks/useInput';
import { Input, InputContainer, Icon } from './Search.styles';
import { useApp } from '../../providers/App/AppProvider';

function Search() {
  const context = useApp();
  const { isDark } = context;

  const submit = () => {
    context.setSearch(value);
  };

  const [value, handleInputChange, handleSubmit] = useInput(submit);

  return (
    <InputContainer onSubmit={handleSubmit} isDark={isDark}>
      <Icon />
      <Input value={value} onChange={handleInputChange} type="text" />
    </InputContainer>
  );
}

export default Search;
