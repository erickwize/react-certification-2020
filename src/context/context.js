// import Dexie from 'dexie'
import React, { useEffect, createContext, useReducer, memo } from 'react'
import { useFetch } from '../utils/hooks/useFetch'

export const Context = createContext(null)

export const ContextReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: !state.theme,
      }
    case 'OPEN_MENU':
      return {
        ...state,
        menu: action.payload,
      }
    case 'GET_DATA':
      return {
        ...state,
        data: action.payload,
      }
    case 'SET_VIEW':
      return {
        ...state,
        view: action.payload,
      }
    case 'SET_TARGET':
      return {
        ...state,
        target: action.payload,
      }
    default:
      return state
  }
}

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
