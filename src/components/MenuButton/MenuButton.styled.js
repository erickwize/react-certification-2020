import styled from 'styled-components';

const Button = styled.button`
  border: transparent;
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0px;
  position: relative;
  width: 50px;
  height: 100%;
  outline: none;
  background: transparent;
  z-index: 1000;
`;

const Icon = styled.svg`
  height: ${(props) => props.height};
  width: auto;
  fill: ${({ theme, title }) => (title === 'CloseButton' ? '#363537' : theme.text)};
`;

export { Button, Icon };
