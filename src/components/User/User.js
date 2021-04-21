import React, { useContext } from 'react'
import StyledUser from './User.styled'
import { Context } from '../../context/context'

const User = React.memo(() => {
  const { state } = useContext(Context)
  return (
    <StyledUser statusMenu={state.menu}>
      <svg viewBox="0 0 40 40">
        <path
          fill="#DFF0FE"
          d="M16.207 35.5H4.5v-32h31v32H23.793L20 39.293 16.207 35.5z"
        />
        <path
          fill="#4788C7"
          d="M35 4v31H23.586L20 38.586 16.414 35H5V4h30zm1-1H4v33h12l4 4 4-4h12V3z"
        />
        <path
          fill="#B6DCFE"
          d="M24.5 15c-.052 2.448-2.051 4.406-4.5 4.406S15.552 17.448 15.5 15c.052-2.448 2.051-4.406 4.5-4.406s4.448 1.958 4.5 4.406z"
        />
        <path
          fill="#4788C7"
          d="M20 11c2.207 0 4 1.793 4 4s-1.793 4-4 4-4-1.793-4-4 1.793-4 4-4zm0-1c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5z"
        />
        <path
          fill="#98CCFD"
          d="M12.516 28.5c.257-3.902 3.515-7 7.484-7s7.227 3.098 7.484 7H12.516z"
        />
        <path
          fill="#4788C7"
          d="M20 22c3.52 0 6.441 2.613 6.93 6H13.07c.489-3.387 3.41-6 6.93-6zm0-1c-4.418 0-8 3.582-8 8h16c0-4.418-3.582-8-8-8z"
        />
      </svg>
    </StyledUser>
  )
})
export default User
