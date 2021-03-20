import React from 'react';
import styled from 'styled-components';
import {MdMenu, MdSearch, MdPersonOutline} from 'react-icons/md';

const ContainerHeader = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  top:0;
  width: 100%;
  height: 65px;
  background-color: #ACDEDF;
  
`;

const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  padding: 10px;
  background-color: transparent;
  border:none;
  font-size: 1.3rem;
`;

const InputSearch = styled.input`
  align-items: center;
  padding: 10px;
  background-color: transparent;
  box-sizing: content-box;
  padding: 10px;
  box-sizing: content-box;
  border: 1px solid #bbc1bf;
  font-size: 1.3rem;
  background: #0000;
  border-radius: 3px;
  height: 1rem;
  font-size: 1rem;
  padding-left: 30px;
`;

const DivSearch = styled.div`
  cursor: text;
  display: inline-flex;
  position: relative;
  font-size: 1rem;
  align-items: center;
  height: 100%;
  justify-content: center;
`;

const DivIcon = styled.div`
  justify-content: center;
  color: #fff;
  position: relative;
  left: 30px;
  height: 100%;
  align-items: center;
  display: flex;
  font-size: 1.3rem;
`;


const DivFlex = styled.div`
  flex-grow: 1; 
`;

const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
`; 

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  border-radius: 30px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
    &::before {
      position: absolute;
      content: "";
      height: 24px;
      width: 24px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: .4s;
      transition: .4s;
      border-radius: 50%;
    }
`; 

const CheckboxSwitch = styled.input`
  background-color: #b39541;
  opacity: 0;
  width: 0px;
  height: 0px;
    &:checked + ${Slider} {
      background: #b39541;
      &::before {
        transform: translateX(24px);
      }
    }
`;
const Span = styled.span`
  color: #b39541;
  font-size: 0.8rem;
  padding: 10px;
`;

const Avatar = styled.div`
  background-color: #b39541;
  border-radius: 999999px;
  margin: 1%;
  height: 45px;
  width: 45px;
  opacity: 0.5;
  color: #fff;
  display: inline-flex;
  font-size: 1.6rem;
  align-items: center;
  justify-content: center;
`;


function Header() {
  
    return (

    <ContainerHeader>
      <MenuButton><MdMenu/></MenuButton>
      <DivSearch>
        <DivIcon><MdSearch/></DivIcon> 
        <InputSearch placeholder="Search"/>
      </DivSearch>
      <DivFlex/>
      <Span>Dark mode</Span>
      <ToggleSwitch>
        <CheckboxSwitch type="checkbox" />
        <Slider/>
      </ToggleSwitch>
      <Avatar>
        <MdPersonOutline/>
      </Avatar>
    </ContainerHeader>
    )
}

export default Header;