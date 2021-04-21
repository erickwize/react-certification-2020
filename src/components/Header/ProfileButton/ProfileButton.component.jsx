import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobal } from '../../../providers/Global.provider';
import { ProfileSVG } from '../../../svg/Profile';
import {Container, StyledButton, buttonPressedStyle} from '../HeaderIconStyles';

export const ProfileButton = () => {
    const { dispatch } = useGlobal();

    return <Link to="/favorites" onClick={()=> dispatch({type:'closeMenu'})}>
        <Container data-testid="profileButton">
            <StyledButton whileTap={buttonPressedStyle}>            
                <ProfileSVG/>
            </StyledButton>
        </Container>
    </Link>;
}