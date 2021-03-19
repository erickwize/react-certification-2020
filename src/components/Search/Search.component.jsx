import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  position: relative;
`;
const Icon = styled.div`
  border-radius: 35px;
  height: 35px;
  width: 35px;
  background-color: #409287;
  display: none;
  @media (max-width: 500px) {
    display: inline-block;
  }
`;
const Input = styled.input`
  border: 1px solid #134d45;
  border-radius: 20px;
  height: 35px;
  width: 200px;
  padding: 10px;
  font-size: 20px;
  color: #409287;
  background-color: #e2faf7;
  @media (max-width: 500px) {
    display: none;
  }
`;

function Search({ children }) {
  return (
    <Wrapper>
      <Icon />
      <Input type="text" />
      {children}
    </Wrapper>
  );
}

export default Search;
