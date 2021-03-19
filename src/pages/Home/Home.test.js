import React from 'react'

import { render } from '@testing-library/react'
import Homepage from './Home.page'
import { Context } from '../../context/context'

const jsonFile = require('../../utils/assets/youtube-videos-mock.json')

test('display Homeview', async () => {
  const { getByRole } = render(
    <Context.Provider value={{ videoItems: jsonFile.items, dark: false }}>
      <Homepage />
    </Context.Provider>
  )

  const result = getByRole('homeview')
  expect(result).toBeInTheDocument()
})
