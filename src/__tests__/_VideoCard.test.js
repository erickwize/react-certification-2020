import React from 'react';
import { screen, cleanup, render, fireEvent } from '@testing-library/react';
import VideoCard from '../components/VideoCard';
import VideoMock from '../utils/mock/youtube-videos-mock.json';
import { getReadableDate, random } from '../utils/fns';

afterEach(() => {
  cleanup();
});

const MockVideoInfo = VideoMock.items[1].snippet;
MockVideoInfo.uploadDate = getReadableDate(VideoMock.items[1].snippet.publishedAt);
MockVideoInfo.thumbnail = VideoMock.items[1].snippet.thumbnails.medium.url;
MockVideoInfo.channel = VideoMock.items[1].snippet.channelTitle;

it('Test Utils: getReadableDate', () => {
  expect(MockVideoInfo.uploadDate).toBe('September 30, 2019');
});

it('Test Utils: random', () => {
  expect(typeof random(10)).toBe('number');
});

it('Should render VideoCard Info', () => {
  const videoCard = render(<VideoCard videoData={MockVideoInfo} />);
  expect(videoCard).toMatchSnapshot();
  const videoCardComponent = screen.getByTestId('yt-videocard');
  expect(videoCardComponent).toBeInTheDocument();
  expect(videoCardComponent).toHaveTextContent(
    'Wizeline | September 30, 2019Video Tour | Welcome to Wizeline G...'
  );
});

it('Handle videoCard click event', () => {
  const cardClick = jest.fn();
  render(<VideoCard videoData={MockVideoInfo} cardClick={cardClick} />);
  const videoCardComponent = screen.getByTestId('yt-videocard');
  expect(videoCardComponent).toBeInTheDocument();
  fireEvent.click(videoCardComponent);
  expect(cardClick).toHaveBeenCalledWith(MockVideoInfo);
});

it('Handle videoCard mouse event', () => {
  const cardClick = jest.fn();
  render(<VideoCard videoData={MockVideoInfo} cardClick={cardClick} />);
  const videoCardComponent = screen.getByTestId('yt-videocard');
  fireEvent.mouseEnter(videoCardComponent);
  const videoCardComponentDes = screen.getByTestId('yt-videocard-description');
  expect(videoCardComponentDes).toBeInTheDocument();
});
