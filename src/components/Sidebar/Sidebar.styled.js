import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  z-index: 555;
  top: 0;
  left: 0;
  width: 80%;
  background-color: #f1f1f1;
  padding: 0px;
  max-width: 300px;
  height: 100%;
  transform: translateX(${(props) => (props.show ? '0' : '-100%')});
  transition: all 0.3s ease-in-out;
`;

const Menu = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  h3 {
    display: flex;
    justify-content: center;
    line-height: 0rem;
    text-transform: uppercase;
    color: black;
    margin: 0px;
    padding: 30px;
    border-bottom: 1px solid ${({ theme }) => theme.toggleBorder};
  }

  a {
    border-bottom: 1px solid ${({ theme }) => theme.toggleBorder};
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;

    :hover {
      background-color: #e4e4e4;
    }
  }
`;

export { Container, Menu };
