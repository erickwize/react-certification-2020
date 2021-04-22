import React, { useReducer } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Header from '../components/Header/Header';
import { globalReducer } from '../store/global/GlobalReducer';
import { GlobalContext } from '../store/global/global.provider';

const history = createMemoryHistory();

const initialState = {
  user: { name: 'Wizeline' },
  themeValue: 'light',
};

function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

const allProviders = ({ children }) => {
  return (
    <GlobalProvider>
      <Router history={history}>{children}</Router>
    </GlobalProvider>
  );
};

describe('Test header components', () => {
  it('Looking for elements', () => {
    render(<Header />, { wrapper: allProviders });

    const menuButton = screen.getByTitle('MenuBurguer');
    expect(menuButton).toBeInTheDocument();

    const search = screen.getByPlaceholderText('Buscar contenido');
    expect(search).toBeInTheDocument();

    const themeButton = screen.getAllByRole('button');
    expect(themeButton.length).toBe(3);

    const iconTheme = screen.getByTitle('MoonButton');
    expect(iconTheme).toBeInTheDocument();

    const singInButton = screen.getByTitle('singInButton');
    expect(singInButton).toBeInTheDocument();

    const sideBar = screen.getByRole('heading', { level: 3 });
    expect(sideBar).toBeInTheDocument();
  });

  it('Opening/Closing SideBar', async () => {
    render(<Header />, { wrapper: allProviders });

    const menuButton = screen.getByTitle('MenuBurguer');
    userEvent.click(menuButton);
    expect(await screen.findByTitle('CloseButton')).toBeInTheDocument();

    userEvent.click(menuButton);
    expect(await screen.findByTitle('MenuBurguer')).toBeInTheDocument();
  });

  it('Opening SideBar and Selecting a public section', async () => {
    render(<Header />, { wrapper: allProviders });

    const menuButton = screen.getByTitle('MenuBurguer');
    userEvent.click(menuButton);
    expect(await screen.findByTitle('CloseButton')).toBeInTheDocument();

    const homeSection = screen.getAllByRole('link');
    expect(homeSection.length).toBe(2);

    // Selecting section and closing sidebar
    userEvent.click(homeSection[0]);
    expect(await screen.findByTitle('MenuBurguer')).toBeInTheDocument();
  });

  it('Opening SideBar and Selecting a privete section', async () => {
    render(<Header />, { wrapper: allProviders });

    const menuButton = screen.getByTitle('MenuBurguer');
    userEvent.click(menuButton);
    expect(await screen.findByTitle('CloseButton')).toBeInTheDocument();

    const sections = await screen.findAllByRole('link');
    expect(sections[1]).toBeInTheDocument();

    // Selecting private (favorites) section and closing sidebar
    userEvent.click(sections[1]);
    expect(await screen.findByTitle('MenuBurguer')).toBeInTheDocument();
    expect(history.location.pathname).toBe('/favorites');
  });

  //   it('Clicking Log out', async () => {
  //     render(<Header />, { wrapper: allProviders });

  //     expect(screen.getByText('Log out'));
  //     const logOut = screen.getByTitle('singInButton');
  //     userEvent.click(logOut);
  //     expect(await screen.findByText('Sign in'));
  //   });
});
