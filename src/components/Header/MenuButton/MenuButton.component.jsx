import React from 'react';
import { MenuSVG } from '../../../svg/Menu';
import {Container, StyledButton, buttonPressedStyle} from '../HeaderIconStyles';


export const MenuButton = () => {
  return <Container data-testid="menuButton">
        <StyledButton whileTap={buttonPressedStyle}>
            <MenuSVG/>
        </StyledButton>
    </Container>;
}