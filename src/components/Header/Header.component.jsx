import React from 'react';
import styled from 'styled-components';
import Search from './Search';
import Menu from './Menu';
import LoginControl from './LoginControl';
import SwitchControl from './SwitchControl';

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



const RightSide = styled.div`
    flex: 50%;
    display:flex;
    align-items:center;
    justify-content: flex-end;
`;



const Header = ({searchHandler}) =>{

  return (
    <StyledHeader>
        <LeftSide>
            <LeftMenu>
                <Menu/>
                <Search searchHandler={searchHandler}/>
            </LeftMenu>
        </LeftSide>
        <RightSide>
            <SwitchControl/>
            <LoginControl/>
        </RightSide>
    </StyledHeader>
  );
};

export default Header;
