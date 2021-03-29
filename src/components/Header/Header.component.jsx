import React from 'react';
import styled from 'styled-components'

const StyledHeader = styled.header`
    background-color: rgb(247, 247, 247);
    display: flex;
    border-bottom: 1px solid rgb(236, 236, 236);
    width: 100%;
    height: 60px;
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
    margin-left:30px;
    padding:none;
    user-select:none;
    outline:none;

    &:hover{
        background-color: rgb(128, 191, 216);
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

const UserLogin  = styled.button`
    width: 40px ;
    height: 40px;
    align-items: center;
    text-align: center;
    border:none;
    background-color: rgb(161, 161, 161);
    border-radius: 50%;
    margin-right:30px;
    padding:none;
    user-select:none;
    outline:none;

    &:hover{
        background-color: rgb(128, 191, 216);
    }
`;

function Header() {

  return (
    <StyledHeader>
        <LeftSide>
            <LeftMenu>
                <MenuButton>
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
            <UserLogin>
                <span className="AvatarLabel">
                    <div className="AvatarContainer">
                        <svg className="UserIcon">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4 m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                    </div>
                </span>
            </UserLogin>
        </RightSide>
    </StyledHeader>
  );
}

export default Header;
