import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import LoginButton from '../components/LoginButton';
import GlobalProvider from '../store/global/global.provider';

jest.mock('../firebase');

test('Test LoginButton components', async () => {
  const history = createMemoryHistory();

  const allProviders = ({ children }) => {
    return (
      <GlobalProvider>
        <Router history={history}>{children}</Router>
      </GlobalProvider>
    );
  };

  render(<LoginButton />, { wrapper: allProviders });

  // Looking for elements
  const loginButton = screen.getByRole('button');
  expect(loginButton).toBeInTheDocument();

  //   Simulate user events
  expect(await screen.findByText('Sign in')).toBeInTheDocument();
  userEvent.click(loginButton);
  expect(history.location.pathname).toBe('/login');
});
