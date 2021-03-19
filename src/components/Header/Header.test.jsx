import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header.component';

test('renders search input', () => {
  render(<Header />);
  const searchInput = screen.getByPlaceholderText('Search...');
  expect(searchInput).toBeInTheDocument();
});

test('renders toggle', () => {
  render(<Header />);
  const toggle = screen.getByTestId('span-toggle');
  expect(toggle).toBeInTheDocument();
});

test('renders profile image', () => {
  render(<Header />);
  const profileImg = screen.getByAltText('profile image');
  expect(profileImg).toBeInTheDocument();
});
