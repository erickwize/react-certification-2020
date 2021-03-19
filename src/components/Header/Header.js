import React from 'react'
import Search from '../Seacrh/Search'
import Toggle from '../Toggle/Toggle'
import User from '../User/User'
import StyledHeader from './Header.styled'
import Humburger from '../Hamburger/Hamburger'

const Header = () => {
  return (
    <StyledHeader>
      <div className="header__humburger__search">
        <Humburger />
        <Search />
      </div>
      <div className="header__theme__user">
        <Toggle />
        <User />
      </div>
    </StyledHeader>
  )
}

export default Header
