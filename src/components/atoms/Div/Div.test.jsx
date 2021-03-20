import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import Div from './index';

describe('Test Div Component', () => {
  afterEach(cleanup);
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Div />, div);
  });

  it('renders the div and the content correctly', () => {
    const { getByTestId } = render(<Div>Test Content</Div>);
    expect(getByTestId('divTest')).toHaveTextContent(/^Test Content$/);
  });
});
