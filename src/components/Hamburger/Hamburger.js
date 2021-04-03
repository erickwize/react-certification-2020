import React, { useContext, useCallback } from 'react'
import { Context } from '../../context/context'
import StyledHamburger from './Hamburger.styled'

const Hamburger = React.memo(() => {
  const { state, dispatch } = useContext(Context)
  const openMenu = useCallback(() => {
    dispatch({ type: 'OPEN_MENU', payload: true })
  }, [dispatch])

  return (
    <StyledHamburger key="Hamburger" onClick={openMenu} toggle={state.menu}>
      <span />
      <span />
      <span />
    </StyledHamburger>
  )
})
export default Hamburger
