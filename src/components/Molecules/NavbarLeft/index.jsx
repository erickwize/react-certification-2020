import React from 'react';
import styled from 'styled-components';
import Input from '../../atoms/Input';
import Hamburguer from '../../atoms/Hamburguer';

const NavBarLeftSC = styled.div`
  display: flex;
  align-items: center;
`;

const handleChange = (event) => {
  console.log(event);
};

function NavbarLeft() {
  return (
    <NavBarLeftSC>
      <Hamburguer />
      <Input type="text" onchange={handleChange} />
    </NavBarLeftSC>
  );
}

export default NavbarLeft;
