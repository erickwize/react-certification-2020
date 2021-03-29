import React, {useState} from 'react';
import { Input, InputContainer, Icon } from './Seacrh.styles';

function Search() {
  const [value, setValue] = useState('wizeline');

  const handleInputChange = (e) => {
    setValue(e.target.value);
  }

  return(
  <InputContainer>
    <Icon />
      <Input value={value} onChange={handleInputChange} type="text" />
    </InputContainer>
  )
};

export default Search;
