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
  height: 30px;
  outline: none;
  background: transparent;
`;

const Burguer = styled.svg`
  height: 90%;
  width: auto;
  transition: all 0.7s linear;
  fill: ${({ theme }) => theme.text};
`;

const Close = styled.svg`
  height: 75%;
  width: auto;
  transition: all 0.7s linear;
  fill: ${({ theme }) => theme.text};
`;

export { Button, Burguer, Close };
