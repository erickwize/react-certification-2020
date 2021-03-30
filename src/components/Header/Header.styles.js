import styled from 'styled-components';
import { VscMenu, VscSymbolBoolean } from 'react-icons/vsc';

export const Header = styled.header`
  display: flex;
  width: 100vw;
  min-height: 70px;
  padding: 17px 17px;
  background: linear-gradient(#beeaf5, #80d9df);
  margin-bottom: 1rem;
  justify-content: space-between;
  margin-bottom: 2.5rem;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  align-items: center;
`;

export const Col = styled.div`
  flex: ${(props) => props.size};
  // border: 2px solid;
  // border-color: blue;
`;

export const MenuIcon = styled(VscMenu)`
  display: block;
  font-size: 26px;
  margin-right: 20px;
  margin-left: 30px;
  color: #6c56a3;
  border: none;
  cursor: not-allowed;
`;

export const LoginContainer = styled.div`
  display: block;
  flex-direction: row;
  align-text: center;
`;
// color: #F894F1; pink

export const LogIcon = styled(VscSymbolBoolean)`
  font-size: 27px;
  margin-right: 20px;
  color: #6c56a3;
  border: none;
  transform: scaleX(-1);
  -moz-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  -ms-transform: scaleX(-1);
  margin-left: 0.2em;
`;
