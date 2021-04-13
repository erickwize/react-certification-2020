import styled from 'styled-components';

const MenuButton = styled.div`
  background-color: #dadae3;
  border-radius: 50%;
  z-index: 1;
  padding: 0;
  margin: -3px 0px 0px 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 38px;
  width: 38px;
  border: none;
  cursor: pointer;
  padding: 7px 0px 7px 0px;

  @media (max-width: 600px) {
    margin: -3px 10px 0px -9px;
  }

  span {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.toggleBorder};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`;

export default MenuButton;
