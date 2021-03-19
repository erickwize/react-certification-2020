import React from 'react';
import styled from 'styled-components';
import { Toggle, ToggleLabel, ToggleWrapper } from './Toggle';
import { Nav, NavHeader, NavCenter, NavLeft, NavRight } from './Nav';
import { Avatar } from './Avatar';

const SearchBar = styled.input`
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  padding: 8px 100px;
  color: #999;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  background: #fafafa;

  &:active,
  &:focus {
    text-align: center;
  }
`;

function Header() {
  return (
    <Nav>
      <NavHeader>
        <NavLeft>☰</NavLeft>
        <NavCenter>
          <SearchBar type="text" placeholder="Search" />
        </NavCenter>
        <NavRight>
          <ToggleWrapper>
            <Toggle id="checkbox" type="checkbox" />
            <ToggleLabel htmlFor="checkbox" />
          </ToggleWrapper>
          Dark mode
        </NavRight>
        <Avatar />
      </NavHeader>
    </Nav>
  );
}

export default Header;
