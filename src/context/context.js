import React, { useEffect, useState, createContext } from 'react'

const jsonFile = require('../utils/assets/youtube-videos-mock.json')

export const Context = createContext()
const ContextProvider = (props) => {
  const [openMenu, setOpenMenu] = useState(false)
  const [darkTheme, setDarkTheme] = useState(false)
  const [listItems, setListItems] = useState([])
  const showMenu = () => {
    setOpenMenu(!openMenu)
  }
  const changeTheme = () => {
    setDarkTheme(!darkTheme)
  }

  useEffect(() => {
    const getList = async () => {
      let data = []
      try {
        data = await jsonFile.items
      } catch {
        console.log('Error reading jsonFile')
      }
      setListItems(data)
    }
    getList()
  }, [listItems])

  return (
    <Context.Provider
      value={{
        statusMenu: openMenu,
        videoItems: listItems,
        setOpenMenu: showMenu,
        dark: darkTheme,
        setTheme: changeTheme,
      }}
    >
      {props.children}
    </Context.Provider>
  )
}
export default ContextProvider
