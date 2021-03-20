import React from 'react';
import styled from 'styled-components'

const StyledHeader = styled.header`
    background-color: rgb(247, 247, 247);
    display: flex;
    border-bottom: 1px solid rgb(236, 236, 236 ) !important;
    width: 100%;
    flex-direction:column;
 `;

const MenuContainer = styled.div`
    display:flex;
    width:auto;
    position: relative;
    align-items:center;
    padding-left: 20px;
    padding-right:20px;
    min-height: 60px;
`;

const LeftMenu = styled.div`
display: flex;
`;

const CenterMenu=styled.div`
    display: flex;
    flex:1;
`;

const RightMenu = styled.div`
display: flex;
`;

const ToogleMenu =styled.div`
width: 35px;
height: 5px;
background-color: black;
margin: 6px 0;
`;

const SearchItem = styled.input`
    width: 15em;
    margin-left: 24px;
`;


const UserLogin  = styled.button`
    width: 40px important!;
    height: 40px important!;
    align-items: center;
    text-align: center;
    border:none;
    background: none;
`;

const Avatar = styled.div`
border-radius: 50%;
justify-content: center;
`;

const LabelSwitch = styled.label`
position: relative;
display: inline-block;
width: 60px;
height: 34px;
margin-right: 50px;
`;

function Header() {

  return (
    <StyledHeader>
       <MenuContainer>
            <LeftMenu>
                <div>
                    <ToogleMenu/>
                    <ToogleMenu/>
                    <ToogleMenu/>
                </div>
                    <SearchItem/>
                </LeftMenu>
                <CenterMenu/>
            <RightMenu>
            <LabelSwitch>
                <input id="none" type="checkbox" text="Dark Mode"/>
                <span className="slider round"/>
            </LabelSwitch>
                <UserLogin>
                    <span>
                        <Avatar>
                            <svg>
                              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                            </svg>
                        </Avatar>
                    </span>
                </UserLogin>
            </RightMenu>
       </MenuContainer>
    </StyledHeader>
  );
}

export default Header;
