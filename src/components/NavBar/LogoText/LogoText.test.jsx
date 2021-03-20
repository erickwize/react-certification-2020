import React from 'react';
import { render, screen } from '@testing-library/react';
import LogoText from './LogoText.component';

describe('AvatarMenu', () => {
  render(<LogoText />);
  test('Text', () => {
    const i = screen.getByText(/Wize/i);
    expect(i).toBeInTheDocument();
  });
});
