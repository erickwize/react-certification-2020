import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import GlobalProvider from '../store/global/Global.provider';
import PlayList from '../components/PlayList/PlayList';
import { mockVideos } from '../mockData';

const { videoId } = mockVideos.items[1].id;

const history = createMemoryHistory();
const allProviders = ({ children }) => {
  return (
    <GlobalProvider>
      <Router history={history}>{children}</Router>
    </GlobalProvider>
  );
};

const server = setupServer(
  rest.get('https://youtube.googleapis.com/youtube/v3/search', (req, res, ctx) => {
    return res(ctx.json(mockVideos));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Testing PlayList component', async () => {
  render(<PlayList videoId={videoId} />, {
    wrapper: allProviders,
  });
  // Looking for elements
  const images = await screen.findAllByRole('img');
  expect(images.length).toBe(24);

  const heading = await screen.findAllByRole('heading', { level: 5 });
  expect(heading.length).toBe(24);

  const cardLink = await screen.findAllByRole('link');
  expect(cardLink.length).toBe(24);

  // User clicking link
  userEvent.click(cardLink[0]);
  expect(history.location.pathname).toBe('/video/nmXMgqjQzls');
  const cards = await screen.findAllByRole('link');
  expect(cards.length).toBe(24);

  userEvent.click(cardLink[1]);
  expect(history.location.pathname).toBe('/video/HYyRZiwBWc8');
  const cards2 = await screen.findAllByRole('link');
  expect(cards2.length).toBe(24);

  userEvent.click(cardLink[2]);
  expect(history.location.pathname).not.toBe('/video/nmXMgqjQzls');
  const cards3 = await screen.findAllByRole('link');
  expect(cards3.length).toBe(24);
});
