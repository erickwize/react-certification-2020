import React from 'react';
import { cleanup, render, screen, fireEvent, waitFor } from '@testing-library/react';
import Login from '../pages/Login';

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
  const dispatch = jest.fn();
  const login = render(<Login dispatch={dispatch} />);

  const userLoginButton = screen.getByTestId('user-login-button');
  expect(userLoginButton).toBeInTheDocument();
  fireEvent.click(userLoginButton);
  expect(dispatch).not.toHaveBeenCalled();
});

it('Do login', async () => {
  const dispatch = jest.fn();
  const login = render(<Login dispatch={dispatch} />);

  const username = screen.getByLabelText('Username');
  fireEvent.change(username, { target: { value: 'wizeline' } });
  const password = screen.getByLabelText('Password');
  fireEvent.change(password, { target: { value: 'Rocks!' } });
  expect(username.value).toBe('wizeline');
  expect(password.value).toBe('Rocks!');
  const userLoginButton = screen.getByTestId('user-login-button');
  fireEvent.click(userLoginButton);
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
