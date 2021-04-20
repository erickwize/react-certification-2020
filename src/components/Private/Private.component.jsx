import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

import { useGlobalProvider } from '../../store/global/global.provider';

function Private(props) {
  const location = useLocation();
  const {
    state: { user },
  } = useGlobalProvider();

  return user ? (
    <Route {...props} />
  ) : (
    <Redirect to={{ pathname: '/login', state: { background: location } }} />
  );
}

export default Private;
