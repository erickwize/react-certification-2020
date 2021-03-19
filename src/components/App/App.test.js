import React from 'react'
import { render } from 'enzyme'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router'

import App from './App'

test('testing App component landing homepage router', () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <App />
    </Router>,
    expect(history.location.pathname).toBe('/')
  )
})
