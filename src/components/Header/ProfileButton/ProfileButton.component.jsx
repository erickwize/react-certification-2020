import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useGlobal } from '../../../providers/Global.provider';
import { ProfileSVG } from '../../../svg/Profile';
import {Container, StyledButton, buttonPressedStyle} from '../HeaderIconStyles';

const Avatar = styled.img`
    border-radius: 50%;
    height: 36px;
    width: 36px;
`;

export const ProfileButton = () => {
    const location = useLocation();
    const {state, dispatch } = useGlobal();

    let redirectTo = {
        pathname:"/login",
        state:{ background: location }
    };
    if(state.user.authenticated){
        redirectTo="/favorites"
    }
    return <Link to={redirectTo} onClick={()=> dispatch({type:'closeMenu'})}>
        <Container data-testid="profileButton">
            <StyledButton whileTap={buttonPressedStyle}>            
                {state.user.authenticated?<Avatar src={state.user.avatarUrl}></Avatar>:<ProfileSVG/>}
            </StyledButton>
        </Container>
    </Link>;
}