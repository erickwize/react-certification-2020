import styled from 'styled-components';

const StyledHeader = styled.header`
  height: 60px;
  width: 100%;
  border-bottom: 1px solid #a0aec0;
  .bar {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    padding: 11px 10px;
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
    color: ${({ theme }) => theme.text};
    font-size: 17px;
    align-items: center;
  }
`;

export { StyledHeader, NavStyle };
