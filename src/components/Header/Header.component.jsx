import React from 'react';
import styled from 'styled-components'

const StyledHeader = styled.header`
    background-color: rgb(227 227 227);
    display: flex;
    border-bottom: 1px solid rgb(236, 236, 236);
    width: 100%;
    height: 60px;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
 `;

const LeftSide = styled.div`
    flex: 50%;
    display: flex;
    justify-content: left;
    align-items: center;
`;

const LeftMenu = styled.div`
    display:flex;
    max-height: 60px;
    align-items: center;
    justify-content: left;
`;

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



const SearchItem = styled.input`
    display:flex;
    widht: 110px;
    height: 30px;
    border:none;
    border-radius: 4px;
    font-size:20px;
    padding-left: 40px;
    border-color:none;
    placeholder: Search..;
    margin-left: 30px;
    outline:none;

`;

const RightSide = styled.div`
    flex: 50%;
    display:flex;
    align-items:center;
    justify-content: flex-end;
`;

/* const SwitchButton = styled.input`
 display: flex;
 margin-right:15px;

&.onoffswitch{

}
`; */

const SwitchLabel = styled.label`
    display: flex;
     align-items: center;
     margin-left: -11px;
     margin-right: 16px;
     vertical-align: middle;
     -webkit-tap-highlight-color: transparent;
`;



function Header() {

  return (
    <StyledHeader>
        <LeftSide>
            <LeftMenu>
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
                <SearchItem placeholder="Search.."/>

            </LeftMenu>
        </LeftSide>
        <RightSide>
        <div className="onoffswitch">
            <SwitchLabel>
                    <span className="Switch-main">
                        <span className="Switch-base">
                            <span className="Switchinput-container">
                                <input className="Switch-input" type="checkbox"/>
                            <span className="Switch-bullet"/>
                            </span>
                        </span>
                        <span className="Switch-track"/>
                    </span>
                    <span>Dark mode</span>
             </SwitchLabel>
        </div>
            <MenuButton className="loginButton">
                <span className="AvatarLabel">
                    <div className="AvatarContainer">
                        <svg className="UserIcon">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4 m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                    </div>
                </span>
            </MenuButton>
        </RightSide>
    </StyledHeader>
  );
}

export default Header;
