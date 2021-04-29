import React from 'react';

import UserLogin from '../../pages/Login';

import { storage } from '../../utils/storage';
import { AUTH_STORAGE_KEY } from '../../utils/constants';

export default function Private({ privateComp, loginComp }) {
  const isUserAuthenticated = storage.get(AUTH_STORAGE_KEY);

  return isUserAuthenticated ? <> {privateComp} </> : <> {loginComp} </>;
}
