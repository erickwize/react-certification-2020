import styled from 'styled-components'

const StyledContainer = styled.div.attrs({
  className: 'container',
})`
  margin-left: ${({ statusMenu }) => (statusMenu ? '3em' : '0em')};
  padding-top: 0.5em;
`
export default StyledContainer
