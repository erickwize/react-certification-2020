import React from 'react';
import { render } from '@testing-library/react';
import HomePage from './Home.page';
import AuthProvider from '../../providers/Auth';

test('render without crash', () => {
  render(
    <AuthProvider>
      <HomePage />
    </AuthProvider>
  );
});
