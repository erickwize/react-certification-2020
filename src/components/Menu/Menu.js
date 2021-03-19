import React, { useContext } from 'react'
import { Context } from '../../context/context'
import StyledMenu from './Menu.styled'

const Menu = () => {
  const { statusMenu } = useContext(Context)

  return (
    <StyledMenu toggle={statusMenu}>
      <a href="/">Home</a>
      <a href="/">Favorites</a>
    </StyledMenu>
  )
}
export default Menu
