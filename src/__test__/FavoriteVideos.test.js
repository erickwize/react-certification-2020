import React, { useReducer } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Route, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import FavoriteVideo from '../pages/FavoriteVideo/FavoriteVideo.page';
import { mockFavorites } from '../mockData';
import { GlobalContext } from '../store/global/global.provider';
import { globalReducer } from '../store/global/GlobalReducer';

jest.mock('../firebase');

describe('Testing Video Component', () => {
  const history = createMemoryHistory();
  const initialState = {
    favoriteVideos: mockFavorites,
    user: { name: 'Wizeline' },
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
        <Router history={history}>
          <Route path="/favorites/:videoId">{children}</Route>
        </Router>
      </GlobalProvider>
    );
  };

  const renderWithRouter = (ui, { videoRoute = '/' } = {}) => {
    history.push({
      pathname: videoRoute,
    });

    return render(ui, { wrapper: allProviders });
  };

  it('landing on a wrong page', async () => {
    renderWithRouter(<FavoriteVideo />, { videoRoute: '/someRoute' });

    expect(history.location.pathname).not.toBe('/favorites/7PtYNO6g7eI');
  });

  it('Full Video Component rendered ', async () => {
    renderWithRouter(<FavoriteVideo />, { videoRoute: '/favorites/7PtYNO6g7eI' });

    expect(history.location.pathname).toBe('/favorites/7PtYNO6g7eI');
    // Looking for PlayList elements
    const images = await screen.findAllByRole('img');
    expect(images.length).toBe(6);

    const heading = await screen.findAllByRole('heading', { level: 5 });
    expect(heading.length).toBe(6);

    const cardLink = await screen.findAllByRole('link');
    expect(cardLink.length).toBe(6);

    // Looking for PlayVideo elements
    const iFrame = await screen.findByTitle('playVideo');
    expect(iFrame).toBeInTheDocument();

    const headingVideo = await screen.findByRole('heading', { level: 2 });
    expect(headingVideo).toBeInTheDocument();

    const button = await screen.findByRole('button');
    expect(button).toBeInTheDocument();
    expect(await screen.findByText('Remove')).toBeInTheDocument();

    const paragraph = await screen.findByTestId('paragraph');
    expect(paragraph).toBeInTheDocument();

    // Rendering selected video
    const paragraphVideo = await screen.findByText(
      'Engineering a better tomorrow. Wizeline is a global software development company that helps its clients solve their biggest challenges with design and ...'
    );
    expect(paragraphVideo).toBeInTheDocument();

    // Show title twice (selected video and list container)
    const title = await screen.findAllByText('We Are Wizeline');
    expect(title.length).toBe(2);
  });

  it('Changind selected video', async () => {
    renderWithRouter(<FavoriteVideo />, { videoRoute: '/favorites/7PtYNO6g7eI' });

    expect(history.location.pathname).toBe('/favorites/7PtYNO6g7eI');

    const cardLink = await screen.findAllByRole('link');
    expect(cardLink.length).toBe(6);

    // Changing selected video
    userEvent.click(cardLink[2]);
    expect(history.location.pathname).toBe('/favorites/nmXMgqjQzls');
  });

  it('Removing a favorite video', async () => {
    renderWithRouter(<FavoriteVideo />, { videoRoute: '/favorites/7PtYNO6g7eI' });

    expect((await screen.findAllByRole('link')).length).toBe(6);

    // Removing a video
    const button = await screen.findByText('Remove');
    userEvent.click(button);
    expect((await screen.findAllByRole('link')).length).toBe(5);
    expect(await screen.findByText('Add')).toBeInTheDocument();
    // const cardLink = await screen.findAllByRole('link');
  });
});
