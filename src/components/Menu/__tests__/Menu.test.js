import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'
import { fireEvent } from '@testing-library/svelte'
import { render } from '@testing-library/react'
import { Context, initialState } from '../../../context/context'
import Menu from '../Menu'

const state = {
  target: 'Wizeline',
  theme: false,
  menu: false,
  view: 'home',
}
describe('Testing Menu component', () => {
  test('Renders Menu without crashing', async () => {
    const rendered = renderer.create(
      <Context.Provider value={{ state }}>
        <Menu />
      </Context.Provider>
    )
    expect(rendered).toMatchSnapshot()
  })
  test('Home view changed when button menu clicked', async () => {
    const { getByText } = render(
      <Context.Provider value={{ state }}>
        <Menu />
      </Context.Provider>
    )
    const linkHome = getByText('Home')

    await fireEvent(
      linkHome,
      new MouseEvent('click', { type: 'SET_VIEW', payload: 'home' })
    )
    expect(initialState.view).toEqual('home')
  })
})
