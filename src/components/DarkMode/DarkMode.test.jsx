import React from 'react';
import { render, screen } from '@testing-library/react';
import DarkMode from './DarkMode.component';

describe('DarkMode', () => {
  beforeEach(() => {
    render(<DarkMode />);
  });
  it('Renders component', () => {
    const theSwitch = screen.getByTestId('darkmode-switch');
    expect(theSwitch.children.length).toEqual(2);
  });
});
