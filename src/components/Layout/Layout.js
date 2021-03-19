import React, { useContext } from 'react'
import Header from '../Header/Header'
import Menu from '../Menu/Menu'
import Container from '../Container/Container'
import { GlobalStyles } from '../../global'
import { Context } from '../../context/context'

import StyledLayout from './Layout.styled'

function Layout({ children }) {
  const { statusMenu, dark } = useContext(Context)

  return (
    <StyledLayout>
      <GlobalStyles statusMenu={statusMenu} theme={dark} />
      <Header />
      <Menu />
      <Container statusMenu={statusMenu}>{children}</Container>
    </StyledLayout>
  )
}

export default Layout
