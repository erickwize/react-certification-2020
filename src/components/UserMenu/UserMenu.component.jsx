import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
`;
const Avatar = styled.div`
  display: block;
  height: 40px;
  width: 40px;
  border-radius: 100px;
  background-color: #409287;
  box-shadow: 0 0 10px #ffffff;
`;

function UserMenu({ children }) {
  return (
    <Wrapper>
      <Avatar />
      {children}
    </Wrapper>
  );
}

export default UserMenu;
