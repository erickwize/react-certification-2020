import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { Route, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import GlobalProvider from '../store/global/Global.provider';
import Video from '../pages/Video/Video';
import { mockVideos } from '../mockData';

describe('Testing Video Component', () => {
  const history = createMemoryHistory();
  const allProviders = ({ children }) => {
    return (
      <GlobalProvider>
        <Router history={history}>
          <Route path="/video/:id">{children}</Route>
        </Router>
      </GlobalProvider>
    );
  };

  const renderWithRouter = (ui, { videoRoute = '/' } = {}) => {
    history.push({
      pathname: videoRoute,
    });

    return render(ui, { wrapper: allProviders });
  };

  const server = setupServer(
    rest.get('https://youtube.googleapis.com/youtube/v3/search', (req, res, ctx) => {
      return res(ctx.json(mockVideos));
    })
  );

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('landing on a wrong page', async () => {
    renderWithRouter(<Video />, { videoRoute: '/noVideo' });

    expect(history.location.pathname).not.toBe('/video/nmXMgqjQzls');
  });

  it('Full Video Component rendered ', async () => {
    renderWithRouter(<Video />, { videoRoute: '/video/nmXMgqjQzls' });

    expect(history.location.pathname).toBe('/video/nmXMgqjQzls');
    // Looking for PlayList elements
    const images = await screen.findAllByRole('img');
    expect(images.length).toBe(24);

    const heading = await screen.findAllByRole('heading', { level: 5 });
    expect(heading.length).toBe(24);

    const cardLink = await screen.findAllByRole('link');
    expect(cardLink.length).toBe(24);

    // Looking for PlayVideo elements
    const iFrame = await screen.findByTitle('playVideo');
    expect(iFrame).toBeInTheDocument();

    const headingVideo = await screen.findByRole('heading', { level: 2 });
    expect(headingVideo).toBeInTheDocument();

    const button = await screen.findByRole('button');
    expect(button).toBeInTheDocument();
    expect(await screen.findByText('AÑADIR A FAVORITOS')).toBeInTheDocument();

    const paragraph = await screen.findByTestId('paragraph');
    expect(paragraph).toBeInTheDocument();

    // Rendering selected video
    const paragraphVideo = await screen.findByText(
      'Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office'
    );
    expect(paragraphVideo).toBeInTheDocument();

    // Show title twice (selected video and list container)
    const title = await screen.findAllByText(
      'Video Tour | Welcome to Wizeline Guadalajara'
    );
    expect(title.length).toBe(2);
  });

  it('Changind selected video', async () => {
    renderWithRouter(<Video />, { videoRoute: '/video/nmXMgqjQzls' });

    expect(history.location.pathname).toBe('/video/nmXMgqjQzls');

    const cardLink = await screen.findAllByRole('link');
    expect(cardLink.length).toBe(24);

    // Changing selected video
    userEvent.click(cardLink[2]);
    expect(history.location.pathname).toBe('/video/Po3VwR_NNGk');
  });
});
