import React, { useEffect, createContext, useReducer, memo } from 'react'
import { useFetch } from '../utils/hooks/useFetch'
import { ContextReducer } from './reducer'

export const Context = createContext(null)

export const initialState = {
  target: 'Wizeline',
  theme: false,
  menu: false,
  view: 'home',
  data: [],
}
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ContextReducer, initialState)
  const { data, isLoading } = useFetch(state.target)

  useEffect(() => {
    if (data) dispatch({ type: 'GET_DATA', payload: data })
  }, [data])

  return isLoading ? (
    <div> Loading...</div>
  ) : (
    <Context.Provider value={{ state, dispatch }}> {children} </Context.Provider>
  )
}
export default memo(ContextProvider)
