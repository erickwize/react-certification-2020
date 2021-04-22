import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Login from '../pages/Login/Login.page';
import GlobalProvider from '../store/global/global.provider';

describe('Testing Login form ', () => {
  const history = createMemoryHistory();
  const allProviders = ({ children }) => {
    return (
      <GlobalProvider>
        <Router history={history}>{children}</Router>
      </GlobalProvider>
    );
  };

  it('Looking for elements', () => {
    render(<Login />, { wrapper: allProviders });

    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toBeInTheDocument();
    expect(screen.getByText('Welcome Back!')).toBeInTheDocument();

    const user = screen.getByLabelText('User');
    expect(user).toBeInTheDocument();

    const password = screen.getByLabelText('Password');
    expect(password).toBeInTheDocument();

    const button = screen.getByRole('button', { name: /Log In/i });
    expect(button).toBeInTheDocument();
  });

  it('Getting invalid user/password message when typing the wrong password', async () => {
    render(<Login />, { wrapper: allProviders });

    userEvent.type(screen.getByLabelText('User'), 'wizeline');
    userEvent.type(screen.getByLabelText('Password'), 'somepassword');
    userEvent.click(screen.getByRole('button', { name: /Log In/i }));
    expect(await screen.findByText('Username or password invalid')).toBeInTheDocument();
  });

  it('Getting invalid user/password message when typing the wrong user', async () => {
    render(<Login />, { wrapper: allProviders });

    userEvent.type(screen.getByLabelText('User'), 'someuser');
    userEvent.type(screen.getByLabelText('Password'), 'Rocks!');
    userEvent.click(screen.getByRole('button', { name: /Log In/i }));
    expect(await screen.findByText('Username or password invalid')).toBeInTheDocument();
  });

  it('Getting invalid user/password message when typing the wrong user and password', async () => {
    render(<Login />, { wrapper: allProviders });

    userEvent.type(screen.getByLabelText('User'), 'someuser');
    userEvent.type(screen.getByLabelText('Password'), 'somepassword!');
    userEvent.click(screen.getByRole('button', { name: /Log In/i }));
    expect(await screen.findByText('Username or password invalid')).toBeInTheDocument();
  });

  it('Typing correct user and password', async () => {
    render(<Login />, { wrapper: allProviders });

    userEvent.type(screen.getByLabelText('User'), 'wizeline');
    userEvent.type(screen.getByLabelText('Password'), 'Rocks!');
    userEvent.click(screen.getByRole('button', { name: /Log In/i }));
    expect(history.location.pathname).toBe('/');
  });
});
