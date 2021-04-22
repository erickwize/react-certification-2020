import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MenuButton from '../components/MenuButton/MenuButton';

test('Test MenuButton components', async () => {
  const menu = false;
  const setMenu = jest.fn();

  render(<MenuButton setMenu={setMenu} menu={menu} />);

  // Looking for elements
  const menuButton = screen.getByRole('button');
  expect(menuButton).toBeInTheDocument();

  const iconTheme = screen.getByTitle('MenuBurguer');
  expect(iconTheme).toBeInTheDocument();

  //   Simulate user events
  //   after clicking themeButton
  const onClickButton = jest.fn(() => userEvent.click(menuButton));

  onClickButton();
  // expect(await screen.findByTitle('CloseButton')).toBeInTheDocument();
  expect(onClickButton).toHaveBeenCalledTimes(1);
  // returning default values
  onClickButton();
  // expect(await screen.findByTitle('MenuBurguer')).toBeInTheDocument();
  expect(onClickButton).toHaveBeenCalledTimes(2);
});
