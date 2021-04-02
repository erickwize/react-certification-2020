import React from 'react';
import { Wrapper, Switch, Track, Ball, Label } from './DarkMode.styled';

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
