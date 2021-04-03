import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoBox from './VideoBox.component';
import videos from '../../../mockFiles/mock.json';

describe('AvatarMenu', () => {
  render(
    <VideoBox
      bigImage={videos.items[5].snippet.thumbnails.medium.url}
      key={videos.items[5].etag}
      title={videos.items[5].snippet.title}
      description={videos.items[5].snippet.description}
    />
  );
  test('Title', () => {
    const i = screen.getByText(videos.items[5].snippet.title);
    expect(i).toBeInTheDocument();
  });
});
