import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';

import App from '../components/App/App.component';

describe('Testing App component ', () => {
  it('Testing elements', async () => {
    const history = createMemoryHistory();
    render(<App />);
    // Looking for home route
    expect(history.location.pathname).toBe('/');

    // How to get differents routes
    // How to move to a different route
    // How to fire events (search, click)
  });
});
