import React from 'react'
import StyledContainer from './Container.styled'

const Container = ({ statusMenu, children }) => {
  return (
    <StyledContainer statusMenu={statusMenu}>
      <main className="container">{children}</main>
    </StyledContainer>
  )
}
export default Container
