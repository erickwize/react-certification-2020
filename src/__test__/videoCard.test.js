import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import VideoCard from '../components/VideoCard/VideoCard';
import { mockVideos } from '../mockData';

test('render videoCard component', () => {
  const firstElement = mockVideos?.items[1];
  render(<VideoCard data={firstElement} />, { wrapper: MemoryRouter });

  // Looking for elements
  const cardLink = screen.getByRole('link');
  expect(cardLink).toBeInTheDocument();

  const imagen = screen.getByRole('img');
  expect(imagen).toBeInTheDocument();

  const heading = screen.getByRole('heading', { level: 3 });
  expect(heading).toBeInTheDocument();

  const description = screen.getByTestId('paragraph');
  expect(description).toBeInTheDocument();

  // put router events here
});
