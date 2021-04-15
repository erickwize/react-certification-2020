import React, { useReducer } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
// import { Router } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import App from '../components/App/App.component';
import { mockVideos, mockSearch } from '../mockData';
import { globalReducer } from '../store/global/GlobalReducer';
import { GlobalContext } from '../store/global/Global.provider';

describe('Testing App component ', () => {
  const history = createMemoryHistory();

  const initialState = {
    fetchingVideo: false,
    videoList: mockVideos,
    error: false,
    searchValue: 'Wizeline',
    themeValue: 'light',
    videoSelected: null,
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
    return <GlobalProvider>{children}</GlobalProvider>;
  };

  const server = setupServer(
    rest.get('https://youtube.googleapis.com/youtube/v3/search', (req, res, ctx) => {
      const search = req.url.searchParams.get('q');
      console.log(search);

      if (search === 'Wizeline') return res(ctx.json(mockVideos));

      if (search === 'React Testing Library') return res(ctx.json(mockSearch));
    })
  );

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('Looking for elements', async () => {
    render(<App />, {
      wrapper: allProviders,
    });
    // Looking for home route
    expect(history.location.pathname).toBe('/');

    // Loking for header elements
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

    // Looking for home elements
    const title = await screen.findByRole('heading', { level: 1 });
    expect(title).toBeInTheDocument();
    expect(await screen.findByText('Enjoy watching!')).toBeInTheDocument();

    const videoResults = await screen.getAllByRole('link');
    expect(videoResults.length).toBe(25);

    const imagen = screen.getAllByRole('img');
    expect(imagen.length).toBe(24);

    const heading = screen.getAllByRole('heading', { level: 3 });
    expect(heading.length).toBe(24);

    const description = screen.getAllByTestId('paragraph');
    expect(description.length).toBe(24);
  });

  it('Searching wizeline videos', async () => {
    render(<App />, {
      wrapper: allProviders,
    });
    // Typing - User event
    const search = screen.getByPlaceholderText('Buscar contenido');
    userEvent.type(search, 'Wizeline{enter}');
    expect(await screen.findByDisplayValue('Wizeline')).toBeInTheDocument();

    // Looking for search results
    const imagen = await screen.findAllByRole('img');
    expect(imagen.length).toBe(24);
    expect(
      await screen.findByText('Wizeline Guadalajara | Bringing Silicon Valley to Mexico')
    ).toBeInTheDocument();
  });
  it('Searching React Testing Library Tutorials', async () => {
    render(<App />, {
      wrapper: allProviders,
    });
    // Typing - User event
    const search = screen.getByPlaceholderText('Buscar contenido');
    userEvent.type(search, 'React Testing Library{enter}');
    expect(await screen.findByDisplayValue('React Testing Library')).toBeInTheDocument();

    // Looking for search results
    const imagen = await screen.findAllByRole('img');
    expect(imagen.length).toBe(24);
    expect(
      await screen.findByText('Start Testing In ReactJS - React Testing Library Tutorial')
    ).toBeInTheDocument();
  });
});
