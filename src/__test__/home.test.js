import React, { useReducer } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { GlobalContext } from '../store/global/global.provider';
import HomePage from '../pages/Home/Home.page';
import { mockVideos } from '../mockData';
import { globalReducer } from '../store/global/GlobalReducer';

jest.mock('../firebase');

describe('Testing Home page', () => {
  const history = createMemoryHistory();

  const initialState = {
    fetchingVideo: false,
    videoList: mockVideos,
    error: false,
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
    render(<HomePage />, {
      wrapper: allProviders,
    });
    const title = await screen.getByRole('heading', { level: 1 });
    expect(title).toBeInTheDocument();
    expect(await screen.findByText('Enjoy watching!')).toBeInTheDocument();

    const videoResults = await screen.findAllByRole('link');
    expect(videoResults.length).toBe(24);

    // Looking for home route
    expect(history.location.pathname).toBe('/');
  });

  it('Testing user events', async () => {
    render(<HomePage />, {
      wrapper: allProviders,
    });

    const videoResults = await screen.findAllByRole('link');
    expect(videoResults.length).toBe(24);

    userEvent.click(videoResults[1]);
    expect(history.location.pathname).toBe('video/HYyRZiwBWc8');
    expect(
      await screen.findByText('Wizeline Guadalajara | Bringing Silicon Valley to Mexico')
    ).toBeInTheDocument();
  });
});
