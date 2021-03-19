import styled from 'styled-components'

const StyledHomepage = styled.div.attrs({
  className: 'homepage',
  role: 'homeview',
})`
  text-align: center;
  h1 {
    font-size: 3rem;
    letter-spacing: -2px;
  }

  margin: 2em;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18em, 1fr));
  column-gap: 1em;
  row-gap: 1em;

  // .cards {
  //   margin: 2em;
  //   display: grid;
  //   grid-template-columns: repeat(auto-fill, minmax(18em, 1fr));
  //   column-gap: 1em;
  //   row-gap: 1em;
  // }
`
export default StyledHomepage

// .homepage {
//   text-align: center;
// }

// .homepage h1 {
//   font-size: 3rem;
//   letter-spacing: -2px;
// }
// .cards {
//   margin: 2em;
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(18em, 1fr));
//   column-gap: 1em;
//   row-gap: 1em;
// }
