import React from 'react';
import { cleanup, render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useHistory } from 'react-router-dom';
import Login from '../pages/Login';

const dispatch = jest.fn();
jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

afterEach(() => {
  cleanup();
});

it('Should render Login', () => {
  const login = render(<Login />);
  expect(login).toMatchSnapshot();

  const userLogin = screen.getByTestId('user-login');
  expect(userLogin).toBeInTheDocument();
});

it('Login api not called', () => {
  render(<Login dispatch={dispatch} />);

  const userLoginButton = screen.getByTestId('user-login-button');
  expect(userLoginButton).toBeInTheDocument();
  fireEvent.click(userLoginButton);
  expect(dispatch).not.toHaveBeenCalled();
});

it('Do login', async () => {
  const spy = jest.spyOn(document, 'getElementById');
  render(<Login dispatch={dispatch} />);

  const username = screen.getByLabelText('Username');
  fireEvent.change(username, { target: { value: 'wizeline' } });
  const password = screen.getByLabelText('Password');
  fireEvent.change(password, { target: { value: 'Rocks!' } });
  expect(username.value).toBe('wizeline');
  expect(password.value).toBe('Rocks!');
  const userLoginButton = screen.getByTestId('user-login-button');
  fireEvent.click(userLoginButton);
})
