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

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
  visibility: ${(props) => (!props.show ? 'hidden' : 'visible')};
`;

const Menu = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const UserName = styled.h3`
  display: flex;
  justify-content: center;
  line-height: 0rem;
  text-transform: uppercase;
  color: black;
  margin: 0px;
  padding: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.toggleBorder};
`;

const Item = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.toggleBorder};
  height: 55px;
  display: flex;
  margin: 0px;
  padding: 0px 60px;
  justify-content: start;
  align-items: center;
  :hover {
    background-color: #e4e4e4;
  }
`;

const Title = styled.div`
  color: black;
  margin-left: 25px;
`;

export { Container, Menu, UserName, Item, Title, Background };
