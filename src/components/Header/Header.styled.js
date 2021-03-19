import styled from 'styled-components'

const StyledHeader = styled.div.attrs({
  className: 'header',
})`
  display: flex;
  background-color: #6AB1DE;
  flex-direction: row;
  justify-content:space-between;
  position:relative;
  padding: 10px;
  width: 100%;
  box-shadow: 0.1em 0.1em 0.9em rgba(0, 0, 0, 0.5);
    .header__humburger__search {
        display: flex;
        flex-direction: row;
    }
    .header__theme__user {
        display: flex;
        flex-direction: row;
        align-items: center;

    }
 
}
`
export default StyledHeader
