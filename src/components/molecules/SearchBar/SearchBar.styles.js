import styled from 'styled-components';
import { VscSearch } from 'react-icons/vsc';

export const SearchContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: left;
`;

export const SearchIcon = styled(VscSearch)`
  display: block;
  font-size: 20px;
  color: #6c56a3;
  border: none;
  cursor: not-allowed;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
`;

export const Input = styled.input`
  padding: 0.4rem 0.6rem;
  width: 80%;
  height: 35px;
  margin: 0.2em 0;
  color: #f894f1;
  font-weight: 600;
  font-size: 0.8rem;
  background: white;
  border: 2px solid;
  border-color: #6c56a3;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const Button = styled.button`
  width: 20%;
  height: 35px;
  margin: 0.2em 0;
  margin-left: -0.2em;
  padding: 0.35rem 0.5rem;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border: 2px solid;
  border-color: #6c56a3;
  align-items: center;
  justify-content: center;
`;

/* background-color: rgba(0, 0, 0, 0.1); */
