import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
  padding: 0 20px;
  height: 40px;
`;
const Switch = styled.div`
  display: inline-block;
  position: relative;
  margin: 0 20px;
`;
const Track = styled.div`
  display: block;
  width: 40px;
  height: 10px;
  background-color: #ffffff;
  border-radius: 100px;
`;
const Ball = styled.div`
  display: block;
  width: 20px;
  height: 20px;
  background-color: #409287;
  border-radius: 100px;
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
`;
const Label = styled.div`
  font-size: 15px;
  line-height: 40px;
  display: inline-block;
  @media (max-width: 500px) {
    display: none;
  }
`;

function DarkMode({ children }) {
  return (
    <Wrapper>
      <Switch>
        <Track />
        <Ball />
      </Switch>
      <Label>Dark Mode</Label>
      {children}
    </Wrapper>
  );
}

export default DarkMode;
