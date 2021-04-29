import React from 'react';
import { screen, cleanup, render, fireEvent } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import AppLayout from '../components/App';
import Favorites from '../pages/Favs';

import NotFound from '../pages/NotFound';
import { useVideoInfo, useVideList, reducer, initalState } from '../providers/GlobalContext';
import VideoMock from '../utils/mock/youtube-videos-mock.json';

afterEach(() => {
  cleanup();
});

const MockVideoInfo = VideoMock.items[1].snippet;
const videoDataMock = {
  channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
  channelTitle: 'Wizeline',
  description:
    'Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...',
  liveBroadcastContent: 'none',
  publishTime: '2019-09-30T23:54:32Z',
  publishedAt: '2019-09-30T23:54:32Z',
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
};

it('Should render NotFound', () => {
  const notFoundPage = render(<NotFound />);
  expect(notFoundPage).toMatchSnapshot();
  const notfound = screen.getByTestId('not-found');
  expect(notfound).toBeInTheDocument();
});

it('Should render Favorites', () => {
  const favorites = render(<Favorites />);
  expect(favorites).toMatchSnapshot();
});

it('Should render App', () => {
  act(() => {
    const app = render(<AppLayout />);
    expect(app).toMatchSnapshot();
  });
  const headerMenu = screen.getByTestId('yt-header');
  expect(headerMenu).toBeInTheDocument();
});

it('Should render App Header', () => {
  act(() => {
    render(<AppLayout />);
  });
  const headerMenu = screen.getByTestId('yt-header');
  expect(headerMenu).toBeInTheDocument();
  const SearchInput = screen.getByPlaceholderText('Search...');
  expect(SearchInput).toBeInTheDocument();
  SearchInput.focus();
  fireEvent.change(SearchInput, { target: { value: 'rise against' } });
  expect(SearchInput.value).toBe('rise against');
  fireEvent.keyDown(SearchInput, { key: 'Enter', code: 'Enter' });
});

test('Test useVideoInfo Hook', () => {
  const { result } = renderHook(() => useVideoInfo());
  expect(result.current.video).toEqual({});
  expect(typeof result.current.updateVideoInfo).toBe('function');

  act(() => {
    result.current.updateVideoInfo(MockVideoInfo);
  });
  expect(result.current.video).toEqual(videoDataMock);
});

test('Test useVideList Hook', () => {
  const { result } = renderHook(() => useVideList());
  expect(result.current.videoList).toEqual([]);
  expect(typeof result.current.updateVideoList).toBe('function');
  act(() => {
    result.current.updateVideoList([
      VideoMock.items[0],
      VideoMock.items[1],
      VideoMock.items[3],
    ]);
  });
  const videoList = [VideoMock.items[0], VideoMock.items[1], VideoMock.items[3]];
  expect(result.current.videoList).toEqual(videoList);
});

test('Test Reducer function', () => {
  expect(reducer(initalState, {type: 'SET_HISTORY', payload: 'Shinee' })).toEqual({
    ...initalState,
    history: 'Shinee',
  });
  expect(reducer(initalState, {type: 'SET_LIGHT_MODE' })).toEqual(initalState);
  expect(reducer(initalState, {type: 'SET_DARK_MODE' })).toEqual({
    ...initalState,
    header: {
      background: '#fea79c',
      input: '#0e4b79'
    },
    card: {
      background: '#f9c7ae',
      textColor: '#0e4b79',
    },
    background: '#0e4b79'
  });
  expect(reducer(initalState, {type: 'SET_SEARCH_KEYWORD', payload: 'Glass Animals' }));
  expect(reducer(initalState, {type: 'SET_FAVS_LIST', payload: { 'id': videoDataMock }}));
  expect(reducer(initalState, {type: 'REMOVE_USER_INFO', payload: 'Glass Animals' })).toEqual(initalState);
  expect(reducer(initalState, {type: 'SET_USER_INFO', payload: {
    id: '123',
    name: 'Wizeline',
    avatarUrl:
      'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
  }})).toEqual({
    ...initalState,
    user: {
      id: '123',
      name: 'Wizeline',
      avatarUrl:
        'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
    }
  });

  expect(reducer(initalState, { type: 'UNKOWN_ACTION' }));
})
