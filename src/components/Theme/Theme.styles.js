import styled from 'styled-components';
import { DarkMode } from '@styled-icons/material-outlined/DarkMode';
import { DarkMode as DarkModeFilled } from '@styled-icons/material/DarkMode';

export const IconContainer = styled.div`
  color: #fff;
  flex-direction: row;
  align-items: center;
  display: flex;
  float: right;
  margin-right: 16px;
`;

export const IconLight = styled(DarkMode)`
  color: #fff;
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

export const IconDark = styled(DarkModeFilled)`
  color: #fff;
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;
