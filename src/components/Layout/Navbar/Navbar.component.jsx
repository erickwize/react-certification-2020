import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'


const Header = styled.header`
    background-color: #957aa4;
    color: white;
`;

const HeaderContainer = styled.div`
    min-height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 20px 0 20px;
    align-items: center;
`;

const LoginButton = styled.button`
   border:none;
   background-color:grey;
   border-radius: 50%;
   outline:none;
   padding:10px;
   margin: 7px;
`;

const SidebarButton = styled.button`
    border:none;
    background-color:transparent;
    border-radius: 50%;
    outline:none;
    padding: 0.7em;
    margin: 1em;
`;


const HeaderInput = styled.input`
    border: 0;
    border-radius: 5px;
    outline: none;
    font-size: 0.9em;
    padding: 0.4em;
`;

const SpanHeader = styled.span`
    margin: 7px;
`;

const ModeControl1 = styled.div`
    height: 10px;
    background: #5f5d5d;
    border-radius: 10px;
    width: 35px;
    margin: 7px;
`;

const ModeControl2 = styled.div`
    height: 20px;
    background: white;
    border-radius: 10px;
    position: relative;
    width: 20px;
    margin: 7px;
    left: -12px;
    top: -12px;
`;

const HeaderRightContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;


function Navbar() {

  return (
    <>
        <Header>
            <HeaderContainer>
                <div>
                    <SidebarButton>
                        <FontAwesomeIcon icon={faBars} color="white" size="lg"/>
                    </SidebarButton>
                    <HeaderInput placeholder="wizeline" />
                </div>
                <HeaderRightContainer>
                    <ModeControl1>
                        <ModeControl2></ModeControl2>
                    </ModeControl1>
                    <SpanHeader>Dark mode</SpanHeader>
                    <LoginButton>
                        <FontAwesomeIcon icon={faUser} color="white" size="lg"/>
                    </LoginButton>
                </HeaderRightContainer>
            </HeaderContainer>
        </Header>
    </>
  );
}

export default Navbar;
