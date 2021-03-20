import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import HeaderMedium from '.';

describe('Test HeaderMedium H4 Component', () => {
  afterEach(cleanup);
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HeaderMedium />, div);
  });

  it('renders the content correctly', () => {
    const { getByRole } = render(<HeaderMedium>Test Content</HeaderMedium>);
    expect(getByRole('heading', { level: 4 })).toHaveTextContent(/^Test Content$/);
  });

  it('renders the content correctly', () => {
    const { getByRole } = render(
      <HeaderMedium fixedHeight="35px">Test Content</HeaderMedium>
    );
    const style = window.getComputedStyle(getByRole('heading', { level: 4 }));
    expect(style.maxHeight).toBe('35px');
  });
});
