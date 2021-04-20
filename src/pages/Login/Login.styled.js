import styled from 'styled-components';

const LoginSecion = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`;

const Card = styled.div`
  width: 360px;
  height: 580px;
  background: #f1f1f1;
  margin: 5% 0px;
  padding: 80px 40px;
  border-radius: 10px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  color: #363537;
`;

const DivInput = styled.div`
  text-align: left;
  margin-top: 24px;
`;

const Label = styled.label`
  display: inline-block;
  margin-bottom: 0.5rem;
  color: #888888;
  font-size: 14px;
`;

const Input = styled.input`
  width: 100%;
  outline: none;
  padding: 8px 16px;
  border: 1px solid #e0e6e8;
  border-radius: 4px;
  font-size: 14px;
  color: #888888;
  transition: box-shadow 0.2s;

  & ::placeholder {
    color: #dedede;
  }
  &:focus {
    box-shadow: 0 0 0 2px rgb(169, 172, 255, 0.5);
  }
`;

const Button = styled.button`
  width: 100%;
  min-width: 64px;
  border: 0;
  border-radius: 4px;
  margin-top: 10px;
  padding: 8px 16px;
  outline: none;
  background-color: #2f8bfd;
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.02857rem;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: #0072ff;
  }
`;

const DisplayError = styled.p`
  color: #c52e2c;
  font-size: 14px;
  font-weight: bold;
  margin: 2px 5px;
`;

export { LoginSecion, Card, Title, DivInput, Label, Input, Button, DisplayError };
