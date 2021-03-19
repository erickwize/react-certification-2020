import React, { useContext } from 'react'
import { Context } from '../../context/context'
import StyledHamburger from './Hamburger.syled'

const Burger = () => {
  const { statusMenu, setOpenMenu } = useContext(Context)

  const handleClick = () => {
    setOpenMenu()
  }
  return (
    <StyledHamburger onClick={handleClick} toggle={statusMenu}>
      <span />
      <span />
      <span />
    </StyledHamburger>
  )
}
export default Burger
