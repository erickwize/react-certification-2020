import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import HeaderLarge from './index';

describe('Test HeaderLarge H1 Component', () => {
  afterEach(cleanup);
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HeaderLarge />, div);
  });

  it('renders the content correctly', () => {
    const { getByRole } = render(<HeaderLarge>Test Content</HeaderLarge>);
    expect(getByRole('heading', { level: 1 })).toHaveTextContent(/^Test Content$/);
  });

  it('renders the content correctly', () => {
    const { getByRole } = render(
      <HeaderLarge fixedHeight="35px">Test Content</HeaderLarge>
    );
    const style = window.getComputedStyle(getByRole('heading', { level: 1 }));
    expect(style.maxHeight).toBe('35px');
  });
});
