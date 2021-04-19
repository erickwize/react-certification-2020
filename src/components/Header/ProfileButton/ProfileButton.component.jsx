import React from 'react';
import { ProfileSVG } from '../../../svg/Profile';
import {Container, StyledButton, buttonPressedStyle} from '../HeaderIconStyles';

export const ProfileButton = () => {
    return <Container data-testid="profileButton">
       <StyledButton whileTap={buttonPressedStyle}>            
            <ProfileSVG/>
        </StyledButton>
    </Container>;
}