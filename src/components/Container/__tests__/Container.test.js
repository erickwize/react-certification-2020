import React from 'react'
import { render } from '@testing-library/react'
import Container from '../Container'
import Homepage from '../../../pages/Home/Home.page'
import { Context } from '../../../context/context'

const jsonFile = require('../../../utils/assets/youtube-videos-mock.json')

const state = {
  theme: false,
  menu: false,
  data: jsonFile,
}

describe('Testing Container component', () => {
  test('display Class container', async () => {
    const { container } = render(
      <Container {...state.tehem}>
        <Context.Provider value={{ state }}>
          <Homepage />
        </Context.Provider>
        )
      </Container>
    )
    expect(container.firstChild).toHaveClass('container')
  })
})
