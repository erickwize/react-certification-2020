import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import PlayVideo from '../components/PlayVideo/PlayVideo';
import { mockVideos } from '../mockData';

const { videoId } = mockVideos.items[1].id;
const { title, description } = mockVideos.items[1].snippet;

test('Test header components', async () => {
  render(<PlayVideo videoId={videoId} videoDetail={{ title, description }} />);

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
  expect(await screen.getByText('ELIMINAR DE FAVORITOS')).toBeInTheDocument();
  expect(onClickButton).toHaveBeenCalledTimes(1);
  // After delete video
  onClickButton();
  expect(await screen.getByText('AÑADIR A FAVORITOS')).toBeInTheDocument();
  expect(onClickButton).toHaveBeenCalledTimes(2);
});
