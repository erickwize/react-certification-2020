import React from 'react';
import styled from 'styled-components'

const ToggleLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 44px;
  height: 22px;
  border-radius: 100%;
`

const SliderToggle = styled.span.attrs({ 'data-testid': "span-toggle"})`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }

`

const CheckboxToggle = styled.input.attrs({ type: 'checkbox'})`

  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${SliderToggle} {
    background-color: #2196F3;
  }

  &:focus + ${SliderToggle}{
    box-shadow: 0 0 1px #2196F3;
  }

  &:checked + ${SliderToggle}:before {
    -webkit-transform: translateX(22px);
    -ms-transform: translateX(22px);
    transform: translateX(22px);
  }

`

function Toggle() {

  return (
    <ToggleLabel>
      <CheckboxToggle />
      <SliderToggle />
    </ToggleLabel>
  )
}


export default Toggle;
