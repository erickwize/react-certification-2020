import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Sidebar from '../components/Sidebar';
import GlobalProvider from '../store/global/global.provider';

jest.mock('../firebase');

test('Testing Sidebar components', async () => {
  const history = createMemoryHistory();

  const allProviders = ({ children }) => {
    return (
      <GlobalProvider>
        <Router history={history}>{children}</Router>
      </GlobalProvider>
    );
  };

  const menu = false;
  const setMenu = jest.fn();

  render(<Sidebar menu={menu} setMenu={setMenu} />, { wrapper: allProviders });

  // Looking for elements
  const sideBar = screen.getByRole('heading', { level: 3 });
  expect(sideBar).toBeInTheDocument();

  const homeSection = screen.getByRole('link');
  expect(homeSection).toBeInTheDocument();
  userEvent.click(homeSection);
  expect(history.location.pathname).toBe('/');
});
