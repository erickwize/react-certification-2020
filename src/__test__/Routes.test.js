import React, { useReducer } from 'react';
import { Router } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';

import Routes from '../components/Routes';
// import GlobalProvider from '../store/global/global.provider';
import { mockFavorites } from '../mockData';
import { GlobalContext } from '../store/global/global.provider';
import { globalReducer } from '../store/global/GlobalReducer';

describe('Testing React App´s routes', () => {
  const history = createMemoryHistory();

  const initialState = {
    user: { name: 'Wizeline' },
    favoriteVideos: mockFavorites,
    videoSelected: mockFavorites[1],
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

  const renderWithRouter = (ui, { route = '/' } = {}) => {
    history.push(route);
    return render(ui, { wrapper: allProviders });
  };

  it('Rendering home page ', () => {
    renderWithRouter(<Routes />);
    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toBeInTheDocument();
    expect(screen.getByText('Enjoy watching!')).toBeInTheDocument();
  });

  it('Rendering login page ', () => {
    renderWithRouter(<Routes />, { route: '/login' });
    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toBeInTheDocument();
    expect(screen.getByText('Welcome Back!')).toBeInTheDocument();
  });

  it('Rendering favorites videos page ', () => {
    renderWithRouter(<Routes />, { route: '/favorites' });
    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toBeInTheDocument();
    expect(screen.getByText('Welcome to your favorite list!')).toBeInTheDocument();
  });

  it('Rendering favorite video selected page ', () => {
    renderWithRouter(<Routes />, { route: '/favorites/7PtYNO6g7eI' });
    const title = screen.getByRole('heading', { level: 2 });
    expect(title).toBeInTheDocument();
    expect(
      screen.getByText(
        'Engineering a better tomorrow. Wizeline is a global software development company that helps its clients solve their biggest challenges with design and ...'
      )
    ).toBeInTheDocument();
  });

  it('Rendering video selected page ', () => {
    renderWithRouter(<Routes />, { route: '/video/7PtYNO6g7eI' });
    const title = screen.getByRole('heading', { level: 2 });
    expect(title).toBeInTheDocument();
    expect(
      screen.getByText(
        'Engineering a better tomorrow. Wizeline is a global software development company that helps its clients solve their biggest challenges with design and ...'
      )
    ).toBeInTheDocument();
  });

  it('Rendering Page not found ', () => {
    renderWithRouter(<Routes />, { route: '/someRoute' });
    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toBeInTheDocument();
    expect(screen.getByText('Page not found')).toBeInTheDocument();
  });
});
