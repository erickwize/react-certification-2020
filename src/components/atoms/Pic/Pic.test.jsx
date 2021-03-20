import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import Pic from './index';

describe('Test Pic Component', () => {
  afterEach(cleanup);
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Pic />, div);
  });

  it('renders default image', () => {
    const { getByRole } = render(<Pic />);
    expect(getByRole('img')).toBeInTheDocument();
    expect(getByRole('img')).toHaveAttribute('src', '/profile.svg');
  });

  it('renders img passed in the props', () => {
    const { getByRole } = render(<Pic imgSrc="/anotherSource/test.png" />);
    expect(getByRole('img')).toHaveAttribute('src', '/anotherSource/test.png');
  });
});
