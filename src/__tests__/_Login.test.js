import React from 'react';
import { cleanup, render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useHistory } from 'react-router-dom';
import Login from '../pages/Login';
import { loginApi } from '../api';

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

it('Fill login data', async () => {
  const spy = jest.spyOn(document, 'getElementById');
  render(<Login dispatch={dispatch} />);

  const username = screen.getByLabelText('Username');
  fireEvent.change(username, { target: { value: 'wizeline' } });
  const password = screen.getByLabelText('Password');
  fireEvent.change(password, { target: { value: 'Rocks!' } });
  const userLoginButton = screen.getByTestId('user-login-button');
  fireEvent.click(userLoginButton);
  expect(username.value).toBe('wizeline');
  expect(password.value).toBe('Rocks!');

  await waitFor(() =>
    expect(dispatch).toHaveBeenCalledWith({
      payload: {
        avatarUrl:
          'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
        id: '123',
        name: 'Wizeline',
      },
      type: 'SET_USER_INFO',
    })
  );
});

it('Test login api', async () => {
  const result = await loginApi('wizeline', 'Rocks!');
  await waitFor(() =>
    expect(result).toEqual({
      id: '123',
      name: 'Wizeline',
      avatarUrl:
        'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
    })
  );
});

it('Test login api fail', async () => {
  try {
    await loginApi('wizeline', 'Rock!');
  } catch (e) {
    expect(e.message).toBe('Username or password invalid');
  }
});
