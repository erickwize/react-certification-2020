import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoCard from './VideoCard.component';
import YoutubeVideosMock from '../../mock/youtube-videos-mock.json';

const video = YoutubeVideosMock.items[0];

test('renders videocard', () => {
  render(<VideoCard video={video} />);
  const title = screen.getByText('Wizeline', { selector: 'h2' });
  const description = screen.getByText(
    "Wizeline transforms how teams build technology. Its customers accelerate the delivery of innovative products with proven solutions, which combine Wizeline's ...",
    { selector: 'p' }
  );
  const image = screen.getByAltText('video thumbnail', { selector: 'img' });

  expect(title).toBeInTheDocument();
  expect(description).toBeInTheDocument();
  expect(image).toBeInTheDocument();
});
