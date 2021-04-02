import React, { useCallback, useContext } from 'react'
import Input from '../Input/Input'
import StyledSearch from './Search.styled'
import { Context } from '../../context/context'

const Search = React.memo(() => {
  const { dispatch } = useContext(Context)
  const handleChange = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        dispatch({ type: 'SET_TARGET', payload: e.target.value })
        dispatch({ type: 'OPEN_MENU', payload: false })
        dispatch({ type: 'SET_VIEW', payload: 'home' })
      }
    },
    [dispatch]
  )
  return (
    <StyledSearch>
      <Input customClickEvent={handleChange} />
    </StyledSearch>
  )
})

export default Search
