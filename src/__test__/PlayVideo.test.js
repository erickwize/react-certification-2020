import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import GlobalProvider from '../store/global/Global.provider';
import PlayVideo from '../components/PlayVideo/PlayVideo';
import { mockVideos } from '../mockData';

const { videoId } = mockVideos.items[1].id;
const videoSelected = mockVideos.items[1];

const history = createMemoryHistory();
const allProviders = ({ children }) => {
  return (
    <GlobalProvider>
      <Router history={history}>{children}</Router>
    </GlobalProvider>
  );
};

test('Test PlayVideo component', async () => {
  render(<PlayVideo videoId={videoId} videoSelected={videoSelected} />, {
    wrapper: allProviders,
  });

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
  onClickButton();
  expect(await screen.findByText('AÑADIR A FAVORITOS')).toBeInTheDocument();
  expect(onClickButton).toHaveBeenCalledTimes(2);
});
