import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Header from '../components/Header/Header';
import GlobalProvider from '../store/global/Global.provider';

const history = createMemoryHistory();
const allProviders = ({ children }) => {
  return (
    <GlobalProvider>
      <Router history={history}>{children}</Router>
    </GlobalProvider>
  );
};

test('Test header components', async () => {
  render(<Header />, { wrapper: allProviders });

  // Looking for elements
  const menuButton = screen.getByTitle('MenuBurguer');
  expect(menuButton).toBeInTheDocument();

  const search = screen.getByPlaceholderText('Buscar contenido');
  expect(search).toBeInTheDocument();

  const themeButton = screen.getAllByRole('button');
  expect(themeButton.length).toBe(2);

  const iconTheme = screen.getByTitle('MoonButton');
  expect(iconTheme).toBeInTheDocument();

  const singIn = screen.getByRole('link', { name: /Sign in/i });
  expect(singIn).toBeInTheDocument();
});
