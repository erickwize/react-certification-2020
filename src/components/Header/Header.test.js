import React from 'react';
import { screen, cleanup, render, fireEvent } from '@testing-library/react';
import HeaderMenu from './Header.component';

afterEach(() => {
  cleanup();
});

test('Should render Header', () => {
  render(<HeaderMenu />);

  const headerComponent = screen.getByTestId('yt-header');
  expect(headerComponent).toBeInTheDocument();
  expect(headerComponent).toContainHTML('Dark mode');
  expect(headerComponent).toContainHTML('input');
});

test('Toggle Header Dark mode', () => {
  render(<HeaderMenu />);

  const switchInput = screen.getByLabelText('Dark mode', { type: 'checkbox' });
  expect(switchInput).toBeInTheDocument();
  fireEvent(
    switchInput,
    new MouseEvent('click', {
      checked: true,
    })
  );
  expect(switchInput.checked).toBe(true);
});
