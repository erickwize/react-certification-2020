import React, { useContext } from 'react'
import { Context } from '../../context/context'
import StyledToggle from './Toggle.styled'

const Toggle = () => {
  const { dark, setTheme } = useContext(Context)

  const handleChange = () => {
    setTheme()
  }
  return (
    <StyledToggle>
      <input
        className="checkbox"
        id="checkbox"
        type="checkbox"
        checked={dark}
        onChange={handleChange}
      />
      <label className="switch" htmlFor="checkbox">
        <span className="slider" />
      </label>
      <div>Dark mode</div>
    </StyledToggle>
  )
}
export default Toggle
