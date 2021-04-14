import React, { useContext } from 'react';
import { Wrapper, Switch, Track, Ball } from './DarkMode.styled';
import { GlobalContext } from '../../context/GlobalContext';

function DarkMode({ children }) {
  const globalContext = useContext(GlobalContext);
  const onClickHandler = () => {
    globalContext.theme.toggleTheme();
  };
  console.log(globalContext.theme.colors);
  return (
    <Wrapper>
      <Switch onClick={onClickHandler}>
        <Track theme={globalContext.theme.colors} />
        <Ball className={globalContext.theme.themeId} />
      </Switch>
      {children}
    </Wrapper>
  );
}

export default DarkMode;
