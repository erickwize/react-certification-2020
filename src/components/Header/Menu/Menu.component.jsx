
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

    &.loginButton{
        margin-right:30px;
    }

    &.menuButton  {
        margin-left:30px;
    }


`;


function Menu() {
    return (
                <MenuButton className="menuButton">
                    <span className="MenuIconLabel">
                        <div className="MenuIconContainer">
                            <svg className="MenuIcon" viewBox="0 0 100 80">
                                <rect width="100" height="15"/>
                                <rect y="30" width="100" height="15"/>
                                <rect y="60" width="100" height="15"/>
                            </svg>
                        </div>
                    </span>
                </MenuButton>
    );
};

export default Menu;
