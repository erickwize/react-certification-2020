import React from 'react'
import { render, cleanup, screen } from '@testing-library/react'
import { shallow } from 'enzyme'
import '@testing-library/jest-dom'
import Card from './Card'

const props = {
  className: 'card1',
  title: 'title',
  alt: 'Video Tour | Welcome to Wizeline Guadalajara',
  description: 'description',
  imageLink: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
  width: 200,
  height: 90,
}

const imageProps = {
  alt: 'title',
  className: 'imageInside',
  height: 90,
  src: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
  width: 200,
}

afterEach(cleanup)
describe('testing Card component', () => {
  test('display Title on the card', async () => {
    render(<Card {...props} />)
    const result = screen.getByText('title')
    expect(result).toBeInTheDocument()
  })

  test('display Description on the card', async () => {
    render(<Card {...props} />)
    const result = screen.getByText('description')
    expect(result).toBeInTheDocument()
  })
  test('display Alt on the card', async () => {
    render(<Card {...props} />)
    const result = screen.getByAltText('title')
    expect(result).toBeInTheDocument()
  })
  test('display Class on the card1', async () => {
    const { container } = render(<Card {...props} />)
    expect(container.firstChild).toHaveClass('card1')
  })

  test('display correct Image on the card', async () => {
    const result = shallow(<Card {...props} />)
    expect(result.find('img').props('src')).toEqual(imageProps)
  })
})
