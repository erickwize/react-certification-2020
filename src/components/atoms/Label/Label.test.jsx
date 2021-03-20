import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import Label from './index';

describe('Test Label Component', () => {
  afterEach(cleanup);
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Label />, div);
  });

  it('renders correct content', () => {
    const { getByTestId } = render(<Label>Test Content</Label>);
    expect(getByTestId('labelTest')).toHaveTextContent(/^Test Content$/);
  });
});
