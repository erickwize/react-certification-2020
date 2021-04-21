import React, { useContext } from 'react';
import { Wrapper, HamButton, HamLine } from './MainMenu.styled';
import { GlobalContext } from '../../context/GlobalContext';

function MainMenu() {
  const globalContext = useContext(GlobalContext);
  return (
    <Wrapper>
      <HamButton>
        <HamLine theme={globalContext.colors} />
        <HamLine theme={globalContext.colors} />
        <HamLine theme={globalContext.colors} />
      </HamButton>
    </Wrapper>
  );
}

export default MainMenu;
