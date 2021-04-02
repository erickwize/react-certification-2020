import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { useSearch } from '../../hooks/useSearch';
import Toggle from '../Toggle';

const HeaderWrapper = styled.div`
  padding: 20px 30px;
  background: #1c5476;
  color: white;
  font-size: 15px;
  display: flex;
  justify-content: space-between;
`;

// const SearchInput = styled.input`
//   border-radius: 5px;
//   background-color: rgba(0, 0, 0, 0.1);
//   color: white;
//   border: none;
//   padding: 5px;
//   width: 100%;
//   max-width: 250px;
//   &::placeholder {
//     color: white;
//   }
// `;


const SearchInput = styled.input`
  padding: 10px;
  font-size: 17px;
  border: 1px solid grey;
  float: left;
  width: 80%;
  color: white;
  background: #f1f1f1;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  padding: 5px;
  width: 100%;
`;


const SearchButton = styled.button`
  float: left;
  width: 20%;
  padding: 10px;
  background: #17415a;
  color: white;
  font-size: 17px;
  border: 0px solid grey;
  border-left: none;
  cursor: pointer;
  
`;

const SearchBar = styled.div`
  max-width:300px;
  display: flex;
  justify-content: flex-start;
`

const ProfileImage = styled.img.attrs({ alt: 'profile image' })`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-left: 16px;
`;

function Header() {

  const [ currentSearch, setCurrentSearch ] = useState("wizeline")
  const { setSearch } = useSearch()
  const history = useHistory();

  const updateSearch = () => {
    setSearch(currentSearch)
    history.push('/')
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      updateSearch()
    }
  }

  return (
    <HeaderWrapper>
      <SearchBar>
        <SearchInput placeholder="Search..." value={currentSearch} onChange={(ev) => setCurrentSearch(ev.target.value)} onKeyDown={handleKeyDown} />
        <SearchButton onClick={() => updateSearch()}> <img alt="search" width={16} src="/search.svg" /> </SearchButton>
      </SearchBar>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Toggle />
        <span style={{ marginLeft: 16 }}>Dark Mode</span>
        <ProfileImage src="/profile.png" />
      </div>
    </HeaderWrapper>
  );
}

export default Header;
