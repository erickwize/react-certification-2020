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

it('Handle favorites button', () => {
  const cardClick = jest.fn();
  const dispatchEvent = jest.fn();
  render(
    <VideoCard videoData={MockVideoInfo} cardClick={cardClick} dispatch={dispatchEvent} />
  );
  const videoCardComponent = screen.getByTestId('yt-videocard');
  fireEvent.mouseEnter(videoCardComponent);
  const favoriteButton = screen.getByTestId('wa-favorite-button');
  expect(favoriteButton).toBeInTheDocument();
  fireEvent.click(favoriteButton);
  expect(dispatchEvent).toHaveBeenCalledWith({
    payload: {
      undefined: {
        channel: 'Wizeline',
        channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
        channelTitle: 'Wizeline',
        description:
          'Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...',
        liveBroadcastContent: 'none',
        publishTime: '2019-09-30T23:54:32Z',
        publishedAt: '2019-09-30T23:54:32Z',
        thumbnail: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
        thumbnails: {
          default: {
            height: 90,
            url: 'https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg',
            width: 120,
          },
          high: {
            height: 360,
            url: 'https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg',
            width: 480,
          },
          medium: {
            height: 180,
            url: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
            width: 320,
          },
        },
        title: 'Video Tour | Welcome to Wizeline Guadalajara',
        uploadDate: 'September 30, 2019',
      },
    },
    type: 'SET_FAVS_LIST',
  });
});
