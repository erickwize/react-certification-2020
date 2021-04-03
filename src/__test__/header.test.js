import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Header from '../components/Header/Header';

test('Test header components', async () => {
  render(<Header />, { wrapper: MemoryRouter });

  // Looking for elements
  const menuButton = screen.getByTestId('MenuButton');
  expect(menuButton).toBeInTheDocument();

  const search = screen.getByPlaceholderText('Buscar contenido');
  expect(search).toBeInTheDocument();

  const themeButton = screen.getByRole('button');
  expect(themeButton).toBeInTheDocument();

  const iconTheme = screen.getByTitle('MoonButton');
  expect(iconTheme).toBeInTheDocument();

  const singIn = screen.getByRole('link', { name: /Sign in/i });
  expect(singIn).toBeInTheDocument();
});
