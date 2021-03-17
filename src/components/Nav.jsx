import React from 'react';
import styled from 'styled-components';
import InputTextIcon from './CustomInputs/InputTextIcon';
import Toggle from './CustomInputs/Toggle';

const Nav = () => {
  return (
    <StyledNav className="homepage">
      <LeftNav>
        <StyledHamburger viewBox="0 0 100 80">
          <rect width="100" height="15" />
          <rect y="30" width="100" height="15" />
          <rect y="60" width="100" height="15" />
        </StyledHamburger>
        <InputTextIcon />
      </LeftNav>
      <RightNav>
        <Toggle labelOn="🌙" labelOff="☀️" />
        <LoginButton>
          <StyledLoginSvg viewBox="0 0 330 330">
            <path d="M305,149.998H121.215l44.392-44.392c5.858-5.858,5.858-15.355,0-21.213c-5.857-5.858-15.355-5.858-21.213,0l-69.998,69.998 c-5.858,5.857-5.858,15.355,0,21.213l69.998,70.002c2.929,2.929,6.767,4.394,10.606,4.394c3.838-0.001,7.678-1.465,10.606-4.393 c5.857-5.858,5.858-15.355,0-21.213l-44.394-44.396H305c8.284,0,15-6.716,15-15C320,156.714,313.284,149.998,305,149.998z" />
            <path d="M155,300H40V30h115c8.284,0,15-6.716,15-15s-6.716-15-15-15H25c-8.284,0-15,6.716-15,15v300c0,8.284,6.716,15,15,15h130 c8.284,0,15-6.716,15-15S163.284,300,155,300z" />
          </StyledLoginSvg>
        </LoginButton>
      </RightNav>
    </StyledNav>
  );
};

export default Nav;

const StyledNav = styled.nav`
  display: flex;
  background-color: #e2e2e2;
  justify-content: space-between;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.5);
`;

const LeftNav = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 1vh 1.5vw;
  width: 100%;
  @media screen and (max-width: 500px) {
    justify-content: space-around;
  }
`;

const StyledHamburger = styled.svg`
  fill: #525252;
  cursor: pointer;
  width: 20px;
  height: 20px;
`;

const RightNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const LoginButton = styled.div`
  background-color: #bebebe;
  margin-left: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50px;
  height: 100%;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #686868;
    svg {
      fill: #bebebe;
    }
  }
`;

const StyledLoginSvg = styled.svg`
  transition: 0.2s;
  fill: #525252;
  width: 20px;
  height: 20px;
`;
