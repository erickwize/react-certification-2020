import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Toggle from './Toggle.component';

test('renders checkbox', () => {
  render(<Toggle />);
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).toBeInTheDocument();
});

test('renders unchecked toggle', () => {
  render(<Toggle />);
  const span = screen.getByTestId('span-toggle');

  expect(span).toBeInTheDocument();
  expect(span).toHaveStyle('background-color: #ccc');
});

test('renders checked toggle', () => {
  render(<Toggle />);
  const checkbox = screen.getByRole('checkbox');
  const span = screen.getByTestId('span-toggle');

  expect(checkbox).toBeInTheDocument();
  expect(span).toBeInTheDocument();

  fireEvent.click(checkbox);
  expect(span).toHaveStyle('background-color: #2196F3');
});
