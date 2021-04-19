import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useGlobal } from '../../providers/Global.provider';

function Private({ children, ...rest }) {
  const { state } = useGlobal();

  return (
    <Route {...rest} render={() => (state.user.authenticated ? children : <Redirect to="/" />)} />
  );
}

export default Private;
