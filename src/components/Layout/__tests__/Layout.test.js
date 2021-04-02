import React from 'react'
import renderer from 'react-test-renderer'
import { Context } from '../../../context/context'
import Layout from '../Layout'

const state = {
  theme: false,
}

describe('Testing Layout component', () => {
  test('renders Layout without crashing', async () => {
    const rendered = renderer.create(
      <Context.Provider value={{ state }}>
        <Layout />
      </Context.Provider>
    )
    expect(rendered).toMatchSnapshot()
  })
})
