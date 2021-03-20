import React from 'react';
import { screen, cleanup, render } from '@testing-library/react';
import HeaderMenu from '../components/Header/index';

afterEach(() => {
  cleanup();
});

test('should render Header', () => {
  render(<HeaderMenu />);

  const todoElement = screen.getByTestId('yt-header');
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toContainHTML('Dark mode');
  expect(todoElement).toContainHTML('input');
});
