import React from 'react'
import { createMemoryHistory } from 'history'
import { render } from '@testing-library/react'
import { Router } from 'react-router'
import App from '../App'

describe('Testing App component', () => {
  test('landing homepage router', () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <App />
      </Router>,
      expect(history.location.pathname).toBe('/')
    )
  })
})
