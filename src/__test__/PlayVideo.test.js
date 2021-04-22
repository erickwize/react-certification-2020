import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import GlobalProvider from '../store/global/Global.provider';
import PlayVideo from '../components/PlayVideo/PlayVideo';
import { mockFavorites } from '../mockData';

const user = { name: 'Wizeline' };
const videoSelected = mockFavorites[1];
const favorite = true;
const addFavorite = jest.fn();
const removeFavorite = jest.fn();

const history = createMemoryHistory();
const allProviders = ({ children }) => {
  return (
    <GlobalProvider>
      <Router history={history}>{children}</Router>
    </GlobalProvider>
  );
};

test('Test PlayVideo component', async () => {
  render(
    <PlayVideo video={{ user, videoSelected, favorite, addFavorite, removeFavorite }} />,
    {
      wrapper: allProviders,
    }
  );

  // Looking for elements
  const iFrame = screen.getByTitle('playVideo');
  expect(iFrame).toBeInTheDocument();

  const heading = screen.getByRole('heading', { level: 2 });
  expect(heading).toBeInTheDocument();

  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();

  const paragraph = screen.getByTestId('paragraph');
  expect(paragraph).toBeInTheDocument();

  // Simulate user events
  const onClickButton = jest.fn(() => userEvent.click(button));

  // Add video
  onClickButton();
  expect(await screen.findByText('ELIMINAR DE FAVORITOS')).toBeInTheDocument();
  expect(onClickButton).toHaveBeenCalledTimes(1);
  // After delete video
});
