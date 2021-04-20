import React from 'react';
import { Link } from 'react-router-dom';
import { ProfileSVG } from '../../../svg/Profile';
import {Container, StyledButton, buttonPressedStyle} from '../HeaderIconStyles';

export const ProfileButton = () => {

    return <Link to="/favorites">
        <Container data-testid="profileButton">
            <StyledButton whileTap={buttonPressedStyle}>            
                <ProfileSVG/>
            </StyledButton>
        </Container>
    </Link>;
}