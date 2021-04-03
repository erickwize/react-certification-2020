import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ThemeButton from '../components/ThemeButton/ThemeButton';

test('Test ThemeButton components', async () => {
  render(<ThemeButton />);

  // Looking for elements
  const themeButton = screen.getByRole('button');
  expect(themeButton).toBeInTheDocument();

  const iconTheme = screen.getByTitle('MoonButton');
  expect(iconTheme).toBeInTheDocument();

  // Simulate user events
  // after clicking themeButton
  const onClickButton = jest.fn(() => userEvent.click(themeButton));

  onClickButton();
  expect(await screen.getByTitle('SunButton')).toBeInTheDocument();
  expect(onClickButton).toHaveBeenCalledTimes(1);
  // returning default value
  onClickButton();
  expect(await screen.getByTitle('MoonButton')).toBeInTheDocument();
  expect(onClickButton).toHaveBeenCalledTimes(2);
});
