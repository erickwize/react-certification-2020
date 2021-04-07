import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import HomePage from '../pages/Home/Home.page';
import { mockVideos } from '../mockData';

const videoList = mockVideos;
const loading = false;
const error = false;

describe('Testing Home page', () => {
  it('Testing all elements ', async () => {
    const history = createMemoryHistory();
    render(<HomePage fetching={{ videoList, loading, error }} />, {
      wrapper: MemoryRouter,
    });
    const videoCard = await screen.getByRole('heading', { level: 1 });
    expect(videoCard).toBeInTheDocument();

    const videoResults = await screen.getAllByRole('link');
    expect(videoResults.length).toBe(24);

    // Looking for home route
    expect(history.location.pathname).toBe('/');
  });
});
