import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
  margin: 8px 10px 0 0;
`;
const HamButton = styled.div`
  display: block;
`;
const HamLine = styled.div`
  display: block;
  width: 30px;
  height: 4px;
  margin-bottom: 5px;
  border-radius: 100px;
  background-color: #409287;
`;

function MainMenu() {
  return (
    <Wrapper>
      <HamButton>
        <HamLine />
        <HamLine />
        <HamLine />
      </HamButton>
    </Wrapper>
  );
}

export default MainMenu;
