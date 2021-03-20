import React from 'react';
import { render, screen } from '@testing-library/react';

import HomePage from '../pages/Home';

test('show all videos data ', async () => {
  render(<HomePage />);

  const videoCard = await screen.getByText(/hubs/i);

  expect(videoCard).toBeInTheDocument();
});
