import React, { useContext } from 'react';
import { Wrapper, Switch, Track, Ball } from './DarkMode.styled';
import { GlobalContext } from '../../context/GlobalContext';

function DarkMode({ children }) {
  const globalContext = useContext(GlobalContext);
  const onClickHandler = () => {
    globalContext.toggleTheme();
  };
  // console.log(globalContext.colors);
  return (
    <Wrapper>
      <Switch onClick={onClickHandler}>
        <Track theme={globalContext.colors} />
        <Ball className={globalContext.themeId} />
      </Switch>
      {children}
    </Wrapper>
  );
}

export default DarkMode;
