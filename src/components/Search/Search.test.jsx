import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from './Search.component';

describe('Search', () => {
  beforeEach(() => {
    render(<Search />);
  });
  it('Has one input and one button', () => {
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('img');
    expect(input.childElementCount).toBe(0);
    expect(button.childElementCount).toBe(0);
  });
  it('Handles onChange', async () => {
    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'Spongebob');
    expect(input.value).toBe('Spongebob');
  });
});
