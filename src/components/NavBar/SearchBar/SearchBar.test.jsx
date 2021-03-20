import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar.component';

describe('SearchBar', () => {
  render(<SearchBar />);

  test('Present', () => {
    const i = screen.getByPlaceholderText(/Search/i);
    expect(i).toBeInTheDocument();
  });
});
