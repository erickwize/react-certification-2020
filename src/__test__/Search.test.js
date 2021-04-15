import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Search from '../components/Search/Search';
import GlobalProvider from '../store/global/Global.provider';

const history = createMemoryHistory();
const allProviders = ({ children }) => {
  return (
    <GlobalProvider>
      <Router history={history}>{children}</Router>
    </GlobalProvider>
  );
};

describe('ThemeButton test', () => {
  it('Looking for elements', () => {
    render(
      <GlobalProvider>
        <Search />
      </GlobalProvider>
    );

    const search = screen.getByPlaceholderText('Buscar contenido');
    expect(search).toBeInTheDocument();
  });
  // Firing events
  it('Updates search box on typing', async () => {
    render(
      <GlobalProvider>
        <Search />
      </GlobalProvider>
    );
    const search = screen.getByPlaceholderText('Buscar contenido');
    userEvent.type(search, 'Wizeline');
    expect(await screen.findByDisplayValue('Wizeline')).toBeInTheDocument();
  });

  it('Fire event when Enter key is pressed', async () => {
    render(<Search />, { wrapper: allProviders });

    const search = screen.getByPlaceholderText('Buscar contenido');
    userEvent.type(search, 'Wizeline{enter}');
    expect(await screen.findByDisplayValue('Wizeline')).toBeInTheDocument();
    expect(history.location.pathname).toBe('/');
  });
});

// SIMULATE API CALL HERE
