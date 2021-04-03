import { useState } from 'react';

const useInput = () => {

const [value, setValue] = useState('wizeline');

    const handleInputChange = (e) => {
      e.persist();
      setValue(e.target.value);
  }
    return [value, handleInputChange];
}

export default useInput;
