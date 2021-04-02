import React from 'react';
import { Wrapper, Avatar } from './UserMenu.styled';

function UserMenu({ children }) {
  return (
    <Wrapper>
      <Avatar />
      {children}
    </Wrapper>
  );
}

export default UserMenu;
