import React from 'react'
import styled from 'styled-components'

function ToggleSwitch() {
    const CheckBoxWrapper = styled.div`
    right: 10px;
    margin:20px 200px 0px 0px;
    position:absolute;
    @media (min-width: 600px){
      
      flex-direction: row ;
      
    }
`;
 const CheckBoxLabel = styled.label`
  float: right;
  right: 10px;
  left: 0;
  
  @media (min-width: 600px){
  width: 42px;
  height: 26px;
  flex-wrap: wrap;
  }
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  position:absolute;
  right: 10px;
  z-index: 1;
  @media (min-width: 600px){
    border-radius: 15px;
    width: 42px;
    height: 26px;
  }
 
  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

const Label = styled.label`
float: right;

font-family: sans-serif;
@media (min-width: 600px){
  font-size: 18px;
  margin: .1em;
  margin-left: 21px;
}

`;

        return (
            <CheckBoxWrapper>
            <Label>Dark Mode!</Label>
            <CheckBox id="checkbox" type="checkbox" />
            <CheckBoxLabel htmlFor="checkbox"></CheckBoxLabel>
            </CheckBoxWrapper>
            
        )
    };

    export default ToggleSwitch;     
