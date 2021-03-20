import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import Layout from './index';

describe('Test Layout Component', () => {
  afterEach(cleanup);
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Layout />, div);
  });

  it('render correct content', () => {
    const { getByRole } = render(<Layout>Test Content</Layout>);
    expect(getByRole('main')).toHaveTextContent(/^Test Content$/);
  });
});
