import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import GlobalProvider from '../store/global/Global.provider';
import VideoCard from '../components/VideoCard/VideoCard';
import { mockVideos } from '../mockData';

const history = createMemoryHistory();
const allProviders = ({ children }) => {
  return (
    <GlobalProvider>
      <Router history={history}>{children}</Router>
    </GlobalProvider>
  );
};

test('render videoCard component', async () => {
  const firstElement = mockVideos?.items[1];
  render(<VideoCard data={firstElement} />, { wrapper: allProviders });

  // Looking for elements
  const cardLink = screen.getByRole('link');
  expect(cardLink).toBeInTheDocument();

  const imagen = screen.getByRole('img');
  expect(imagen).toBeInTheDocument();

  const heading = screen.getByRole('heading', { level: 3 });
  expect(heading).toBeInTheDocument();

  const description = screen.getByTestId('paragraph');
  expect(description).toBeInTheDocument();

  // User events
  userEvent.click(cardLink);
  expect(history.location.pathname).toBe('/video/HYyRZiwBWc8');
  expect(
    await screen.findByText('Wizeline Guadalajara | Bringing Silicon Valley to Mexico')
  ).toBeInTheDocument();
});
