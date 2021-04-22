import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  position: relative;
`;
const Input = styled.input`
  border: 1px solid #134d45;
  border-radius: 20px;
  height: 35px;
  min-width: 200px;
  padding: 10px;
  padding-right: 35px;
  font-size: 20px;
  color: #409287;
  background-color: #e2faf7;
  @media (max-width: 500px) {
    display: none;
  }
`;
const Button = styled.div`
  border-radius: 20px;
  height: 35px;
  width: 35px;
  cursor: pointer;
  transform: translateX(-33px) translateY(3px);
`;

export { Wrapper, Input, Button };
