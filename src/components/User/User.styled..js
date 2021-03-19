import styled from 'styled-components'

const StyledUser = styled.div.attrs({
  className: 'header__user',
})`
  display: flex;
  cursor: pointer;
  width: 2em;
  height: 2em;

  position: relative;
`
export default StyledUser
