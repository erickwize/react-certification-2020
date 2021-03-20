import React from 'react';
import { render, screen } from '@testing-library/react';

import Header from '../components/Header';

test('renders header', () => {
  render(<Header />);

  const singIn = screen.getByText(/Sign In/i);
  expect(singIn).toBeInTheDocument();

  const placeholder = screen.getByPlaceholderText('Buscar contenido');
  expect(placeholder).toBeInTheDocument();
});
