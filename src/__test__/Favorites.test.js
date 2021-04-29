import React, { useReducer } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { GlobalContext } from '../store/global/global.provider';
import { globalReducer } from '../store/global/GlobalReducer';
import Favorites from '../pages/Favorites/Favorites.page';
import { mockFavorites } from '../mockData';

jest.mock('../firebase');

describe('Testing Home page', () => {
  const history = createMemoryHistory();
  history.push('/favorites');
  const initialState = {
    favoriteVideos: mockFavorites,
    user: { name: 'Wizeline' },
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

  it('Looking for all elements ', async () => {
    render(<Favorites />, {
      wrapper: allProviders,
    });
    const title = await screen.getByRole('heading', { level: 1 });
    expect(title).toBeInTheDocument();
    expect(await screen.findByText('Welcome to your favorite list!')).toBeInTheDocument();

    const videoResults = await screen.findAllByRole('link');
    expect(videoResults.length).toBe(6);

    // Looking for favorites route
    expect(history.location.pathname).toBe('/favorites');
  });

  it('Testing user events', async () => {
    render(<Favorites />, {
      wrapper: allProviders,
    });

    const videoResults = await screen.findAllByRole('link');
    expect(videoResults.length).toBe(6);

    userEvent.click(videoResults[1]);
    expect(
      await screen.findByText(
        'Engineering a better tomorrow. Wizeline is a global software development company that helps its clients solve their biggest challenges with design and ...'
      )
    ).toBeInTheDocument();
  });

  it('Testing visibility favorite button', async () => {
    render(<Favorites />, {
      wrapper: allProviders,
    });

    // All iconButtons should say 'remove'
    const iconButtons = screen.queryAllByText('Remove');
    expect(iconButtons.length).toBe(6);

    const selectedCard = iconButtons[0];
    expect(selectedCard).not.toBeVisible();
    // visible
    userEvent.hover(selectedCard);
    expect(await screen.queryAllByTitle('FavoriteButton')[0]).toBeVisible();
    // Deleting a video
    userEvent.click(selectedCard);
    expect((await screen.findAllByText('Remove')).length).toBe(5);

    // invisible
    userEvent.unhover(selectedCard);
    expect(await screen.queryAllByTitle('FavoriteButton')[0]).not.toBeVisible();
  });
});
