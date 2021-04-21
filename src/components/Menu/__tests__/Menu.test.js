import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { Context } from '../../../context/context'
import { Context, initialState } from '../../../context/context'
import Menu from '../Menu'

const jsonFile = require('../../../utils/assets/youtube-videos-mock.json')

describe('Testing Menu component', () => {
  test('Renders Menu without crashing', async () => {
    const state = {
      view: 'home',
      data: jsonFile,
    }
    const rendered = renderer.create(
      <Context.Provider value={{ state }}>
        <Menu />
      </Context.Provider>
    )
    expect(rendered).toMatchSnapshot()
  })

  test('Favorites view changed when button menu clicked', async () => {
    const e = { target: { innerText: 'Favorites' } }

    const state = {
      view: 'home',
      data: jsonFile,
    }

    const payload = { payload: 'favorites', type: 'SET_VIEW' }

    const handleChange = jest.fn()
    const dispatch = jest.fn()

    const { getByText } = render(
      <Context.Provider value={{ state, dispatch }}>
        <Menu handleChange={handleChange} />
      </Context.Provider>
    )

    const container = await waitFor(() => getByText('Favorites'))
    fireEvent.click(container, e)

    expect(dispatch).toHaveBeenCalledTimes(3)
    expect(dispatch).toHaveBeenCalledWith(payload)
  })

  test('Home view changed when button menu clicked', async () => {
    const e = { target: { innerText: 'Home' } }

    const state = {
      view: 'favorite',
      data: jsonFile,
    }

    const payload = { payload: 'home', type: 'SET_VIEW' }

    const handleChange = jest.fn()
    const dispatch = jest.fn()

    const { getByText } = render(
      <Context.Provider value={{ state, dispatch }}>
        <Menu handleChange={handleChange} />
      </Context.Provider>
    )

    const container = await waitFor(() => getByText('Home'))
    fireEvent.click(container, e)

    expect(dispatch).toHaveBeenCalledTimes(3)
    expect(dispatch).toHaveBeenCalledWith(payload)
  })
})
