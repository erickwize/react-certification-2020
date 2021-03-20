import React from 'react';
import { render, screen } from '@testing-library/react';

import Switch from '../styles/SwitchStyle';

test('render Switch component', () => {
  render(<Switch className="switch-checkbox" id="switch" type="checkbox" checked />);

  const switchId = screen.getByText(/Dark Mode/i);
  expect(switchId).toBeInTheDocument();
});
