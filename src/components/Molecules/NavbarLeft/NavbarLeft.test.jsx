import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import NavbarLeft from './index';

describe('Test NavbarLeft Component', () => {
  afterEach(cleanup);
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NavbarLeft />, div);
  });

  it('renders the pic and the text input correctly', () => {
    const navbarLeft = render(<NavbarLeft>Test Content</NavbarLeft>);
    expect(navbarLeft.getByRole('img')).toBeInTheDocument();
    expect(navbarLeft.getByRole('textbox')).toBeInTheDocument();
  });
});
