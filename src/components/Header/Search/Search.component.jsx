import React, { useState } from 'react';
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

@media only screen and (max-width: 350px) {

    width: 210px;

}

`;

const Search = ({searchHandler}) =>{
    const[query, setQuery] = useState("")
    const getTextQuery = (e) => {
        setQuery(e.target.value)
    }

    const onSubmitQuery = (e) =>{
        e.preventDefault();
        searchHandler(query);
    }

    return(
        <form onSubmit={onSubmitQuery}>
        <SearchItem placeholder="Search.." value={query}  onChange={getTextQuery} />
        </form>
    );
}

export default Search;