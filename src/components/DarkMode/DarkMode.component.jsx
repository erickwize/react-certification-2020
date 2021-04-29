import React, { useContext } from 'react';
import { Wrapper, Switch, Track, Ball } from './DarkMode.styled';
import { GlobalContext } from '../../context/GlobalContext';

function DarkMode() {
  const globalContext = useContext(GlobalContext);

  const onClickHandler = () => {
    globalContext.toggleTheme();
  };
  return (
    <Wrapper>
      <Switch onClick={onClickHandler} data-testid="darkmode-switch">
        <Track theme={globalContext.colors} />
        <Ball className={globalContext.themeId} />
      </Switch>
    </Wrapper>
  );
}

export default DarkMode;
