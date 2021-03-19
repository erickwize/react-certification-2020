import React from 'react';
import styled from 'styled-components'
import Toggle from '../Toggle'

const HeaderWrapper = styled.div`
  padding: 20px 30px;
  background: #1C5476;
  color: white;
  font-size: 15px;
  display: flex;
  justify-content: space-between;
`

const SearchInput = styled.input`
  border-radius: 5px;
  background-color: rgba(0,0,0,0.1);
  color: white;
  border: none;
  padding: 5px;
  width: 100%;
  max-width: 250px;
  &::placeholder {
    color: white;
  }
`

const ProfileImage = styled.img.attrs({ alt: "profile image"})`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-left: 16px;

`

function Header() {

  return <HeaderWrapper>
    <SearchInput placeholder="Search..." />
    <div style={{display: "flex", alignItems: "center"}}>
      <Toggle />
      <span style={{marginLeft: 16}}>Dark Mode</span>
      <ProfileImage src={'/profile.png'} />
    </div>
  </HeaderWrapper>
}




export default Header;
