import React from 'react';
import styled from 'styled-components';

const InputTextIcon = ({ path }) => {
  return (
    <Wrapper>
      <SvgWrapper>
        <StyledSvg focusable="false" viewBox="0 0 24 24">
          {path || (
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          )}
        </StyledSvg>
      </SvgWrapper>
      <InputWrapper>
        <StyledInputText />
      </InputWrapper>
    </Wrapper>
  );
};

export default InputTextIcon;

const Wrapper = styled.div`
  position: relative;
  background-color: #bebebe;
  margin: 0% 5%;
  border-radius: 25px;
`;

const SvgWrapper = styled.div`
  height: 100%;
  display: flex;
  padding: 0px 8px;
  position: absolute;
  align-items: center;
  pointer-events: none;
  justify-content: center;
`;

const StyledSvg = styled.svg`
  fill: #525252;
  width: 1em;
  height: 1em;
  display: inline-block;
  font-size: 1.5rem;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  flex-shrink: 0;
  user-select: none;
`;

const InputWrapper = styled.div`
  display: inline-flex;
  position: relative;
  align-items: center;
`;

const StyledInputText = styled.input`
  padding: 8px 5px;
  font-size: 1em;
  padding-left: calc(1em + 25px);
  border: none;
  background-color: transparent;
  color: #424242;
  &:focus {
    outline: none;
  }
`;
