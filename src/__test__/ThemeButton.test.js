import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ThemeButton from '../components/ThemeButton/ThemeButton';
import GlobalProvider from '../store/global/global.provider';

test('Test ThemeButton components', async () => {
  render(
    <GlobalProvider>
      <ThemeButton />
    </GlobalProvider>
  );

  // Looking for elements
  const themeButton = screen.getByRole('button');
  expect(themeButton).toBeInTheDocument();

  const iconTheme = screen.getByTitle('MoonButton');
  expect(iconTheme).toBeInTheDocument();

  // Simulate user events
  // after clicking themeButton
  const onClickButton = jest.fn(() => userEvent.click(themeButton));

  onClickButton();
  expect(await screen.findByTitle('SunButton')).toBeInTheDocument();
  expect(onClickButton).toHaveBeenCalledTimes(1);
  // returning default value
  onClickButton();
  expect(await screen.findByTitle('MoonButton')).toBeInTheDocument();
  expect(onClickButton).toHaveBeenCalledTimes(2);
});
