import { createGlobalStyle } from 'styled-components'
import { colors } from './styles/colors'

const { primaryDark, primaryLight } = colors

export const GlobalStyles = createGlobalStyle`

html {
  font-size: 1.125rem;
  line-height: 1.6;
  font-weight: 400;
  font-family: sans-serif;
  box-sizing: border-box;
  scroll-behavior: smooth;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => (theme ? primaryDark : primaryLight)};
  margin-left: ${({ statusMenu }) => (statusMenu ? '6.5em' : '0em')};
  transition: background-position 0.3s ease;
  -webkit-transition: all 0.3s ease-in;
  -moz-transition: all 0.3s ease-in;
  -o-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}

.separator::before {
  content: '•';
  color: white;
  padding: 0.4rem;
}

a {
  text-decoration: none;
  font-weight: bold;
  color: white;
}

a:active {
  color: blueviolet;
}


`
export default GlobalStyles
