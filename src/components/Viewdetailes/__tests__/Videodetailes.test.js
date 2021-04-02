import React from 'react'
import renderer from 'react-test-renderer'
import Videodetailes from '../Viewdetailes'
import { Context } from '../../../context/context'

const state = {
  target: 'Wizeline',
  theme: false,
  menu: false,
  view: 'home',
}

describe('Testing Videodetailes component', () => {
  test('Renders Videodetailes without crashing', async () => {
    const rendered = renderer.create(
      <Context.Provider
        value={{
          state,
        }}
      >
        <Videodetailes />
      </Context.Provider>
    )
    expect(rendered).toMatchSnapshot()
  })
})
