import React from 'react';
import styled from 'styled-components'

const StyledHeader = styled.header`
    overflow: hidden;
    background-color: rgb(247, 247, 247);
    display: flex;
    border-bottom: 1px solid rgb(236, 236, 236 ) !important;
 `;

const LeftMenu = styled.div`
display: flex;
margin: 15px 20px 15px 20px;
`;

const CenterMenu=styled.div`
display: flex;
flex:1;
`;

const RightMenu = styled.div`
display: flex;
margin: 15px 20px 15px 20px;
`;

const ToogleMenu =styled.button`
margin: 5px 5px 0px 0px;
`;

const SearchItem = styled.input`
    width: auto;
    margin-left: 24px;
`;

const DarkMode = styled.button`
margin: 5px 5px 0px 0px;
`;

const UserLogin  = styled.div`
    margin-right: 30px;
    display:flex;
    width: 90px;
    height: 100%;
`;


function Header() {

  return (
    <StyledHeader>
       <LeftMenu>
           <ToogleMenu/>
            <SearchItem/>
        </LeftMenu>
        <CenterMenu/>
       <RightMenu>
           <DarkMode/>
           <UserLogin/>
       </RightMenu>
    </StyledHeader>
  );
}

export default Header;
