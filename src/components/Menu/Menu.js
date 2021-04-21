import React, { useContext } from 'react'
import { Context } from '../../context/context'
import StyledMenu from './Menu.styled'

const Menu = React.memo(() => {
  const { state, dispatch } = useContext(Context)

  const handleChange = (e) => {
    e.preventDefault()
    if (e.target.innerText === 'Home') {
      dispatch({ type: 'SET_VIEW', payload: 'home' })
      dispatch({ type: 'OPEN_MENU', payload: false })
      dispatch({ type: 'SET_TARGET', payload: 'Wizeline' })
    } else {
      dispatch({ type: 'SET_VIEW', payload: 'favorites' })
      dispatch({ type: 'OPEN_MENU', payload: false })
      dispatch({ type: 'SET_TARGET', payload: '' })
    }
  }

  return (
    <StyledMenu toggle={state.menu}>
      <a href="/" onClick={handleChange}>
        Home
      </a>
      <a href="/" onClick={handleChange}>
        Favorites
      </a>
    </StyledMenu>
  )
})
export default Menu
