import React from 'react';
import { IconDark, IconContainer, IconLight } from './Theme.styles';
import { useApp } from '../../providers/App/AppProvider';

function Theme() {
  const context = useApp();
  const { isDark } = context;

  const onClick = () => {
    context.setDark((isDark) => !isDark);
  };

  return (
    <IconContainer onClick={onClick}>
      {isDark ? <IconDark /> : <IconLight />}
      <p> {isDark ? 'Light Mode' : 'Dark Mode'} </p>
    </IconContainer>
  );
}

export default Theme;
