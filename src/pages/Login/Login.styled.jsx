import styled from 'styled-components';

export const Section = styled.section`
  display: block;
  width: 300px;
  margin: 50px auto;
  color: ${(props) => props.theme.text || 'red'};
  transition: all 0.4s ease-in-out;
`;

export const Title = styled.h1`
  text-align: center;
  letter-spacing: -1px;
`;
export const Label = styled.label`
  display: block;
  font-weight: 700;
  text-transform: capitalize;
  margin-bottom: 0.4rem;
`;
export const Input = styled.input`
  color: white;
  font-size: 1.2rem;
  width: 100%;
  padding: 0.4rem 0.6rem;
  border-radius: 3px;
  border: 1px solid white;
  background-color: ${(props) => props.theme.background || 'red'};
  color: ${(props) => props.theme.text || 'red'};
`;
export const Button = styled.button`
  width: 5rem;
  margin-top: 1rem;
  padding: 0.4rem 0.6rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 3px;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.contrast || 'red'};
    color: ${(props) => props.theme.background || 'red'};
  }
`;
