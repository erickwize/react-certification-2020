import React, { useContext } from 'react'
import { Context } from '../../context/context'
import StyledMenu from './Menu.styled'

const Menu = React.memo(() => {
  const { state, dispatch } = useContext(Context)
  const changeToHome = (e) => {
    e.preventDefault()
    dispatch({ type: 'SET_VIEW', payload: 'home' })
    dispatch({ type: 'OPEN_MENU', payload: false })
    dispatch({ type: 'SET_TARGET', payload: 'Wizeline' })
  }

  const changeToFavorites = (e) => {
    e.preventDefault()
    dispatch({ type: 'SET_VIEW', payload: 'favorites' })
    dispatch({ type: 'OPEN_MENU', payload: false })
    dispatch({ type: 'SET_TARGET', payload: '' })
  }

  return (
    <StyledMenu toggle={state.menu}>
      <a href="/" onClick={changeToHome}>
        Home
      </a>
      <a href="/" onClick={changeToFavorites}>
        Favorites
      </a>
    </StyledMenu>
  )
})
export default Menu
