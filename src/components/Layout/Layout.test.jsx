import React from 'react';
import { render } from '@testing-library/react';
import Layout from './Layout.component';

test('render without crash', () => {
  render(<Layout />);
});
