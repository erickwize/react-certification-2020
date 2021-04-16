import React, { useContext, useState } from 'react';
import { useDispatch } from '../../../store/StoreProvider';
import { types } from '../../../store/StoreReducer';

import key from '../../../mockFiles/key.json';
import './SearchBar.styles.css';

export default function SearchBar(){
    const dispatch = useDispatch();
    const [value, setValue] = useState('wizeline');

    const updateValue = e => { setValue(e.target.value)}

    function updateVideos (){
        fetch(`https://www.googleapis.com/youtube/v3/search?key=${key.key}&type=video&part=snippet&maxResults=10&q=${value}`)
        .then(resp => resp.json())
        .then(response => dispatch({
            type: types.setVideos,
            payload: {
                videos: response.items
            }
        }))
        .catch(error => console.log(error))
    }

    const updateSection = () => {
        dispatch({ type: types.setSectionToMain });
        
    }

    const onSubmitHandle = e =>{
        e.preventDefault();
        updateVideos();
        updateSection();
    }

    return(
        <form onSubmit={onSubmitHandle} className="searchBar">
            <span className="searchLogo">
                <i className="fas fa-search searchIcon"></i>
            </span>
            <input className="searchTxt" type="text" placeholder="Search" value={value} onChange={updateValue}/>
        </form>
    );
}