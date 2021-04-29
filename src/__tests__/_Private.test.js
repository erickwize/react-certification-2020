import React from 'react';
import { cleanup, render} from '@testing-library/react';
import Private from '../components/Private';
import UserFavorites from '../pages/Favs';
import UserLogin from '../pages/Login';

import { storage } from '../utils/storage';
import { AUTH_STORAGE_KEY } from '../utils/constants';

const dispatch = jest.fn();
const selectCard = jest.fn();

afterEach(() => {
  cleanup();
});

it('Private: Not auth', () => {
  render(
    <Private>
      <UserFavorites selectCard={selectCard} dispatch={dispatch} />
      <UserLogin dispatch={dispatch} />
    </Private>
  );
});

it('Render Private', () => {
  storage.set(AUTH_STORAGE_KEY, true);
  render(
    <Private>
      <UserFavorites selectCard={selectCard} dispatch={dispatch} />
      <UserLogin dispatch={dispatch} />
    </Private>
  );
});
