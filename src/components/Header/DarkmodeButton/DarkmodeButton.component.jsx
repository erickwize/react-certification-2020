import React from 'react';
import { DarkmodeSVG } from '../../../svg/Darkmode';
import { useGlobal } from '../../../providers/Global.provider';
import {Container, StyledButton, buttonPressedStyle} from '../HeaderIconStyles';

export const DarkmodeButton = () => {

    const { dispatch } = useGlobal();

    return <Container data-testid="darkmodeButton" onClick={()=> dispatch({type:'theme'})}>
       <StyledButton whileTap={buttonPressedStyle} onClick={()=> dispatch({type:'closeMenu'})}>
           <DarkmodeSVG/>
        </StyledButton>
    </Container>;
}