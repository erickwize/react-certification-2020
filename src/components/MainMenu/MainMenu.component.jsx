import React from 'react';
import { Wrapper, HamButton, HamLine } from './MainMenu.styled';

function MainMenu() {
  return (
    <Wrapper>
      <HamButton>
        <HamLine />
        <HamLine />
        <HamLine />
      </HamButton>
    </Wrapper>
  );
}

export default MainMenu;
