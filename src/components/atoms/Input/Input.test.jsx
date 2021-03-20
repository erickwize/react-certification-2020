import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import Input from './index';

describe('Test Layout Component', () => {
  afterEach(cleanup);
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Input />, div);
  });

  it('The attribute is correct', () => {
    const { getByRole } = render(
      <Input placeholder="Placeholder Test" name="InputTest" type="text" value="hola" />
    );
    expect(getByRole('textbox')).toHaveAttribute('placeholder', 'Placeholder Test');
  });
});
