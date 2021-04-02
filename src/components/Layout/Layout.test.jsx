import React from 'react';
import { render } from '@testing-library/react';
import Layout from './Layout.component';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from '../../providers/Auth';
import SearchProvider from '../../hooks/useSearch';

const Wrapper = ({ children }) => (
  <BrowserRouter>
    <AuthProvider>
      <SearchProvider>
        {children}
      </SearchProvider>
    </AuthProvider>
  </BrowserRouter>
)

test('render without crash', () => {
  render(
    <Wrapper>
      <Layout />
    </Wrapper>
  );
});
