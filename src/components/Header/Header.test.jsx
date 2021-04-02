import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header.component';
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

test('renders search input', () => {
  render(
    <Wrapper>
      <Header />
    </Wrapper>
  );
  const searchInput = screen.getByPlaceholderText('Search...');
  expect(searchInput).toBeInTheDocument();
});

test('renders toggle', () => {
  render(
    <Wrapper>
      <Header />
    </Wrapper>
  );
  const toggle = screen.getByTestId('span-toggle');
  expect(toggle).toBeInTheDocument();
});

test('renders profile image', () => {
  render(
    <Wrapper>
      <Header />
    </Wrapper>
  );
  const profileImg = screen.getByAltText('profile image');
  expect(profileImg).toBeInTheDocument();
});
