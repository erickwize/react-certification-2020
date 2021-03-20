import React from 'react';
import { render } from '@testing-library/react';
import VideoPreviewCard from './VideoPreviewCard';

const mockProps = {
  title: 'example',
  description: 'example',
  channelTitle: 'example',
  publishTime: 'example',
  image: 'example',
};
describe('VideoPreviewCard', () => {
  it('should render correctly', () => {
    const { container } = render(
      <VideoPreviewCard
        title={mockProps.title}
        description={mockProps.description}
        channelTitle={mockProps.channelTitle}
        publishTime={mockProps.publishTime}
        image={mockProps.image}
      />
    );
    expect(container.firstChild).toHaveClass('card');
  });
});
