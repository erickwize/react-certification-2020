import React from 'react';
import styled from 'styled-components';

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

@media only screen and (max-width: 600px) {

    width: 310px;

}

`;

function Search(){
    return(
        <SearchItem placeholder="Search.."/>
    );
}

export default Search;