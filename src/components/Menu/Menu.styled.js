import styled from 'styled-components'

const StyledMenu = styled.div.attrs({
  className: 'menu',
})`
  display: flex;

  flex-direction: column;
  justify-content: flex-start;
  background: ${({ toggle }) => (toggle ? '#2d314d' : '#FFFFFF')};
  height: 100vh;
  text-align: left;
  width: ${({ toggle }) => (toggle ? '10em' : '0em')};
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  transition-property: background, width;
  transition-duration: 0.3s, 0.3s;
  transition-timing-function: ease-in, ease-in;
  a {
    margin-left: 1em;
    margin-top: 2em;
    font-weight: bold;
    opacity: ${({ toggle }) => (toggle ? '1' : '0')};
    transition: ${({ toggle }) =>
      toggle ? 'opacity 0.7s ease-in' : 'opacity 0.2s ease-in'};
    &:last-child {
      margin-top: 0em;
    }
  }
`
export default StyledMenu
