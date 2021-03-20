import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import Hamburguer from './index';

describe('Test Hamburguer Component', () => {
  afterEach(cleanup);
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Hamburguer src="/menu.svg" alt="Menu Icon" />, div);
  });

  it('render correct image', () => {
    const { getByAltText } = render(<Hamburguer />);
    expect(getByAltText('Menu Icon')).toHaveAttribute('src', '/menu.svg');
  });
});
