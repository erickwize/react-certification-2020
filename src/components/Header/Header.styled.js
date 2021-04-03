import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: white;
  height: 50px;
  width: 100%;
  .bar {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    padding: 10px;
    @media (max-width: 400px) {
      justify-content: end;
    }
  }
`;

const NavStyle = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;
  font-size: 1rem;
  .navButton {
    display: flex;
    justify-content: center;
    width: 100px;
    color: inherit;
    font-size: 17px;
    align-items: center;
  }
`;

export { StyledHeader, NavStyle };
