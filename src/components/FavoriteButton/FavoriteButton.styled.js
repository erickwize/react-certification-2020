import styled from 'styled-components';

const Button = styled.button`
  border: none;
  border-radius: 5px;
  border-top-left-radius: ${(props) => (props.container === 'card' ? '10px' : '5px')};
  cursor: pointer;
  width: ${(props) => (props.container === 'card' ? '80px' : '175px')};
  height: ${(props) => (props.container === 'card' ? '30px' : '35px')};
  background: #c00;
  color: #fff;
  font-size: ${(props) => (props.container === 'card' ? '12px' : '17px')};
  font-weight: bold;
  margin: ${(props) => (props.container === 'card' ? '0px' : '5px')};
  overflow: hidden;
  padding: 0px;
  position: ${(props) => (props.container === 'card' ? 'absolute' : 'relative')};
  outline: none;
  display: flex;
  justify-content: start;
  align-items: center;
  z-index: 500;
  top: 0;
  left: 0;
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  :hover {
    background: #eb4943;
  }
`;

const Icon = styled.svg`
  height: 60%;
  width: auto;
  margin-left: ${(props) => (props.container === 'card' ? '5px' : '35px')};
`;

const Label = styled.span`
  margin-left: ${(props) => (props.container === 'card' ? '5px' : '8px')};
`;

export { Button, Icon, Label };
