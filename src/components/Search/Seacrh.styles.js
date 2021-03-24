import styled from 'styled-components';
import { SearchAlt } from '@styled-icons/boxicons-regular/SearchAlt';

export const InputContainer = styled.div`
  background-color: #3a7da7;
  padding: 3px;
  border-radius: 3px;
  margin-left: 16px;
`;

export const Icon = styled(SearchAlt)`
  color: #fff;
  width: 24px;
  height: 24px;
  margin-left: 5px;
`;

export const Input = styled.input`
  background-color: transparent;
  border: 0;
  padding: 0.5em;
  color: #fff;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px;
  }
`;
