import styled from 'styled-components';
import { color, fontSize } from '../../utils/globalStyle';

export const LoginView = styled.form`
  height: 100vh;
`;
export const LoginForm = styled.form`
  margin: 40% auto;
  display: block;
  width: 100%;
  background-color: ${color.lightCoral};
  padding: 15px 18px;
  height: fit-content;
  color: ${color.white};
  font-size: ${fontSize.l};
  text-align: center;
  border-radius: 3px;
`;

export const Inputs = styled.input`
  color: ${color.oceanBlue};
  font-size: ${fontSize.default};
  border: none;
  height: 30px;
  width: 250px;
  &:focus {
    border: none;
    outline: 0;
  }

  @media screen and (max-width: 750px) {
    width: inherit;
  }
`;

export const LabelWrapper = styled.label`
  color: ${color.white};
  margin: 8px 0;
  display: block;
`;

export const Label = styled.p`
  display: block;
  margin: 0 0 3px;
  font-weight: bold;
`;

export const Submit = styled.button`
  height: fit-content;
  width: 100%;
  border-radius: 4px;
  margin: 15px 0;
  color: white;
  padding: 8px 15px;
  font-size: ${fontSize.l};
  display: block;
  background-color: ${color.oceanBlue};
  border: none;
`;
