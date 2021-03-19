import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Container from './Container'
import Homepage from '../../pages/Home/Home.page'
import { Context } from '../../context/context'

const jsonFile = require('../../utils/assets/youtube-videos-mock.json')

const statusMenu = false

test('display Class container', async () => {
  const { container } = render(
    <Container {...statusMenu}>
      <Context.Provider value={{ videoItems: jsonFile.items, dark: false }}>
        <Homepage />
      </Context.Provider>
      )
    </Container>
  )
  expect(container.firstChild).toHaveClass('container')
})
