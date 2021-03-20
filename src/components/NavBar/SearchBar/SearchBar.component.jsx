import React from 'react';
import './SearchBar.styles.css';

export default function SearchBar(){
    return(
        <div className="searchBar">
            <span className="searchLogo">
                <i className="fas fa-search searchIcon"></i>
            </span>
            <input className="searchTxt" type="text" placeholder="Search"/>
        </div>
    );
}