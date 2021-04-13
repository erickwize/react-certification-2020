import React from 'react';
import styled from 'styled-components';



const MenuButton  = styled.button`
    display:flex;
    width: 40px ;
    height: 40px;
    align-items: center;
    text-align: center;
    border:none;
    background-color: rgb(161, 161, 161);
    border-radius: 50%;
    padding:none;
    user-select:none;
    outline:none;

    &:hover{
        background-color: rgb(128, 191, 216);


    }

    &.LoginButton{
        margin-right:30px;
    }

    &.menuButton  {
        margin-left:30px;
    }


    @media only screen and (max-width: 600px) {

            display: none;

    }
`;


function LoginControl (){
    return(
        <MenuButton className="LoginButton">
            <span className="AvatarLabel">
                <div className="AvatarContainer">
                    <svg className="UserIcon">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4 m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                </div>
            </span>
        </MenuButton>
    );
};

export default LoginControl;

