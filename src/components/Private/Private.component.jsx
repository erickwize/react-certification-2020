import React from 'react';
import { useHistory } from 'react-router-dom';

import { storage } from '../../utils/storage';
import { AUTH_STORAGE_KEY } from '../../utils/constants';

export default function Private({ children }) {
  const urlHistory = useHistory();
  const isUserAuthenticated = storage.get(AUTH_STORAGE_KEY);

  return isUserAuthenticated ? <> {children} </> : urlHistory.push('/login');
}
