import React from 'react';
import styled from 'styled-components';
import Search from '../Search';
import MainMenu from '../MainMenu';
import DarkMode from '../DarkMode';
import UserMenu from '../UserMenu';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 15px 20px;
  background-color: #70dbcd;
  height: 70px;
  box-shadow: 0 0 10px #409287;
  margin-bottom: 20px;
`;
const Left = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Right = styled.div`
  display: flex;
  justify-content: space-between;
`;

function Header() {
  return (
    <Wrapper>
      <Left>
        <MainMenu />
        <Search />
      </Left>
      <Right>
        <DarkMode />
        <UserMenu />
      </Right>
    </Wrapper>
  );
}

export default Header;
