import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import PlayList from '../components/PlayList/PlayList';
import { mockVideos } from '../mockData';

test('Testing PlayList component', () => {
  const handlePlayVideo = jest.fn();

  render(<PlayList listItems={mockVideos} handlePlayVideo={handlePlayVideo} />, {
    wrapper: MemoryRouter,
  });

  // Looking for elements
  const images = screen.getAllByRole('img');
  expect(images.length).toBe(24);

  const heading = screen.getAllByRole('heading', { level: 5 });
  expect(heading.length).toBe(24);

  const cardLink = screen.getAllByRole('link');
  expect(cardLink.length).toBe(24);

  // User clicking link
  userEvent.click(cardLink[0]);
  expect(handlePlayVideo).toHaveBeenCalledTimes(1);

  userEvent.click(cardLink[1]);
  expect(handlePlayVideo).toHaveBeenCalledTimes(2);

  userEvent.click(cardLink[2]);
  expect(handlePlayVideo).toHaveBeenCalledTimes(3);
});
