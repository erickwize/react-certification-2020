import { useState } from 'react';

const useInput = (submitCallback) => {
  const [value, setValue] = useState('wizeline');

  const handleSubmit = (e) => {
    e.preventDefault();
    submitCallback();
  };

  const handleInputChange = (e) => {
    e.persist();
    setValue(e.target.value);
  };
  return [value, handleInputChange, handleSubmit];
};

export default useInput;
