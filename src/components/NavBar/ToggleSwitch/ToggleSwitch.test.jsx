import React from 'react';
import { render, screen } from '@testing-library/react';
import ToggleSwitch from './ToggleSwitch.component';

describe('ToggleSwitch', () => {
  render(<ToggleSwitch />);

  test('Title', () => {
    const i = screen.getByText(/Dark Mode/i);
    expect(i).toBeInTheDocument();
  });
});
