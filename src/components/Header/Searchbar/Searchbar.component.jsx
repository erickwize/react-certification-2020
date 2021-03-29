import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';

const Container = styled(motion.div)`
    align-items: center;
    background-color: transparent;
    display: flex;
    width: 100%;
`;

const InnerContainer = styled(motion.div)`
    align-items: center;
    display: flex;
    margin: auto;
    width: 50%;
`;

const StyledSearchbar = styled(motion.input)`
    border: 1px solid #b3b3b3;
    height: 32px;
    width: 100%;

    &:focus{
        outline: none;
        border: 1px solid #b400d2;
    }
`;

const StyledSvg = styled(motion.svg)`
    float: left;
    fill: #b400d2;
`;


export const Searchbar = () => {
  return <Container data-testid="searchbar">
      <InnerContainer>
        <StyledSearchbar type="text" placeholder="Search"></StyledSearchbar>
        <StyledSvg height="32" focusable="false" viewBox="0 0 24 24" data-testid="searchbarIcon"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></StyledSvg>
      </InnerContainer>
  </Container>;
}