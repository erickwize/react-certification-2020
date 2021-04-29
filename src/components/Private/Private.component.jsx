import React from 'react';
import { useHistory } from 'react-router-dom';

import { storage } from '../../utils/storage';
import { AUTH_STORAGE_KEY } from '../../utils/constants';

export default function Private({ component }) {
  const history = useHistory();
  const isUserAuthenticated = storage.get(AUTH_STORAGE_KEY);

  return isUserAuthenticated ? <> {component} </> : history.push(`/login`);
}
