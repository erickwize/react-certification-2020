import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import GlobalProvider from '../store/global/global.provider';
import VideoCard from '../components/VideoCard/VideoCard';
import { mockFavorites } from '../mockData';

const history = createMemoryHistory();
const allProviders = ({ children }) => {
  return (
    <GlobalProvider>
      <Router history={history}>{children}</Router>
    </GlobalProvider>
  );
};

test('render videoCard component', async () => {
  const firstElement = mockFavorites[1];
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
  expect(history.location.pathname).toBe('video/7PtYNO6g7eI');
  expect(
    await screen.findByText(
      'Engineering a better tomorrow. Wizeline is a global software development company that helps its clients solve their biggest challenges with design and ...'
    )
  ).toBeInTheDocument();
});
