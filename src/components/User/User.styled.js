import styled from 'styled-components'

const StyledUser = styled.div.attrs({
  className: 'header__user',
})`
  display: flex;
  cursor: pointer;
  width: 2em;
  height: 2em;
  position: relative;

  @media only screen and (max-width: 500px) {
    display: ${({ statusMenu }) => (statusMenu ? 'none' : 'flex')};
  }
  @media only screen and (max-width: 320px) {
    display: none;
  }
`
export default StyledUser
