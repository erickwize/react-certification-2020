import React from 'react';
import { screen, cleanup, render } from '@testing-library/react';
import VideoCard from './VideoCard.component';
import VideoMock from '../../utils/mock/youtube-videos-mock.json';
import { getReadableDate, random } from '../../utils/fns';

afterEach(() => {
  cleanup();
});

const MockVideoInfo = VideoMock.items[1].snippet;
MockVideoInfo.uploadDate = getReadableDate(MockVideoInfo.publishedAt);

test('Test Utils: getReadableDate', () => {
  expect(MockVideoInfo.uploadDate).toBe('September 30, 2019');
});

test('Test Utils: getReadableDate', () => {
  expect(typeof random(10)).toBe('number');
});

test('should render Header', () => {
  render(<VideoCard videoData={MockVideoInfo} />);

  const videoCardComponent = screen.getByTestId('yt-videocard');
  expect(videoCardComponent).toBeInTheDocument();
  expect(videoCardComponent).toHaveTextContent(
    'Video Tour | Welcome to Wizeline Guadalajara| September 30, 2019 Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...'
  );
});
