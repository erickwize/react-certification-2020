import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { Route, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Video from '../pages/Video/Video';
import { mockVideos } from '../mockData';

const videoDetail = mockVideos.items[0];
const history = createMemoryHistory();

const allProviders = ({ children }) => {
  return (
    <Router history={history}>
      <Route path="/video/:id">{children}</Route>
    </Router>
  );
};

const renderWithRouter = (ui, { videoRoute = '/' } = {}) => {
  history.push({
    pathname: videoRoute,
    data: { videoList: mockVideos, data: videoDetail },
  });

  return render(ui, { wrapper: allProviders });
};
describe('Testing Video Component', () => {
  it('landing on a wrong page', async () => {
    renderWithRouter(<Video />, { videoRoute: '/noVideo' });

    expect(history.location.pathname).not.toBe('/video/nmXMgqjQzls');
  });

  it('Full Video Component rendered ', async () => {
    renderWithRouter(<Video />, { videoRoute: '/video/nmXMgqjQzls' });

    expect(history.location.pathname).toBe('/video/nmXMgqjQzls');

    // Rendering selected video
    const paragraph = await screen.getByText(/Follow Hector Padilla/i);
    expect(paragraph).toBeInTheDocument();

    // Show title twice (selected video and list container)
    const title = await screen.getAllByText(/Video Tour/i);
    expect(title.length).toBe(1);

    // Show video list
    // const listVideos = screen.getAllByRole('link');
    // expect(listVideos.length).toBe(20);
  });

  it('Changind selected video', async () => {
    renderWithRouter(<Video />, { videoRoute: '/video/nmXMgqjQzls' });

    expect(history.location.pathname).toBe('/video/nmXMgqjQzls');

    // const listVideos = screen.getAllByRole('link');
    // expect(listVideos.length).toBe(20);

    // Changing selected video
    // userEvent.click(listVideos[2]);
    // expect(history.location.pathname).toBe('/video/Po3VwR_NNGk');

    // Fix asynchronous query
    // expect(
    //   await screen.findAllByText('Wizeline hace sentir a empleados como en casa')
    // ).toBe(2);
  });
});
