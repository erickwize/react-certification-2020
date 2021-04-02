import React from 'react'
import renderer from 'react-test-renderer'
import { Context } from '../../../context/context'
import Header from '../Header'

const state = {
  theme: false,
}

describe('Testing Header component', () => {
  test('renders Header without crashing', async () => {
    const rendered = renderer.create(
      <Context.Provider value={{ state }}>
        <Header />
      </Context.Provider>
    )
    expect(rendered).toMatchSnapshot()
  })
})
