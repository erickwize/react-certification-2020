import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  margin: 0 20px;
  @media (max-width: 500px) {
    margin: 0;
  }
`;
const Input = styled.input`
  border: 1px solid #134d45;
  border-color: ${(props) => props.theme.contrast || 'red'};
  border-radius: 3px;
  height: 35px;
  min-width: 150px;
  padding: 10px;
  padding-right: 45px;
  font-size: 15px;
  color: #409287;
  background-color: ${(props) => props.theme.dark || 'red'};
  color: ${(props) => props.theme.primary || 'red'};
  @media (max-width: 500px) {
    min-width: 100px;
    width: 100px;
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
