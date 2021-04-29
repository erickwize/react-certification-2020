import React from 'react';
import { cleanup, render} from '@testing-library/react';
import { useHistory } from 'react-router-dom';
import UserFavorites from '../pages/Favs';
import { GlobalContext, initalState } from '../providers/GlobalContext';

import { storage } from '../utils/storage';
import { FAVORITE_VIDEOS_KEY, AUTH_STORAGE_KEY } from '../utils/constants';

const dispatch = jest.fn();
const selectCard = jest.fn();
jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

const favsList = {
  HYyRZiwBWc8: {
    channel: 'Wizeline',
    channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
    description:
      'Wizeline continues to offer a Silicon Valley culture in burgeoning innovation hubs like Mexico and Vietnam. In 2018, our Guadalajara team moved into a ...',
    link: 'https://www.youtube.com/embed/HYyRZiwBWc8?autoplay=1&color=white',
    thumbnail: 'https://i.ytimg.com/vi/HYyRZiwBWc8/mqdefault.jpg',
    title: 'Wizeline Guadalajara | Bringing Silicon Valley to Mexico',
    uploadDate: 'April 18, 2019',
    videoId: 'HYyRZiwBWc8',
  },
  Po3VwR_NNGk: {
    channel: 'El Economista TV',
    channelId: 'UCXmAOGwFYxIq5qrScJeeV4g',
    description:
      'En el 2014, Bismarck fundó Wizeline, compañía tecnológica que trabaja con los corporativos ofreciendo una plataforma para que desarrollen software de forma ...',
    link: 'https://www.youtube.com/embed/Po3VwR_NNGk?autoplay=1&color=white',
    thumbnail: 'https://i.ytimg.com/vi/Po3VwR_NNGk/mqdefault.jpg',
    title: 'Wizeline hace sentir a empleados como en casa',
    uploadDate: 'March 4, 2019',
    videoId: 'Po3VwR_NNGk',
  }
}
storage.set(FAVORITE_VIDEOS_KEY, favsList);
storage.set(AUTH_STORAGE_KEY, true);

afterEach(() => {
  cleanup();
});

it('Private: Not auth', () => {
  const favs = render(
    <GlobalContext.Provider value={{ ...initalState, favoritesList: favsList }}>
      <UserFavorites selectCard={selectCard} dispatch={dispatch} />
    </GlobalContext.Provider>
  );
  expect(favs).toMatchSnapshot();
});
