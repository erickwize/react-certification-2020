import React from 'react';
import { render } from '@testing-library/react';
import HomePage from './Home.page';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from '../../providers/Auth';
import SearchProvider from '../../hooks/useSearch';
import { act } from 'react-dom/test-utils';

const Wrapper = ({ children }) => (
  <BrowserRouter>
    <AuthProvider>
      <SearchProvider>
        {children}
      </SearchProvider>
    </AuthProvider>
  </BrowserRouter>
)

test('render without crash', async () => {
  const promise = Promise.resolve();

  render(
    <Wrapper>
      <HomePage />
    </Wrapper>
  );
  await act(() => promise);
});
