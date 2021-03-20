import React from 'react';
import { render, screen } from '@testing-library/react';

import VideoCard from '../components/VideoCard';
import { mockVideos } from '../mockData';

test('render videoCard component', () => {
  const firstElement = mockVideos?.items[1];
  render(<VideoCard data={firstElement} />);

  const title = screen.getByAltText(/Video Tour/i);
  expect(title).toBeInTheDocument();
});
