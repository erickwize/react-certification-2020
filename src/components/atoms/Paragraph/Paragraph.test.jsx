import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import Paragraph from './index';

describe('Test Paragraph Component', () => {
  afterEach(cleanup);
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Paragraph />, div);
  });

  it('render correct content', () => {
    const screen = render(<Paragraph>Test Content</Paragraph>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
