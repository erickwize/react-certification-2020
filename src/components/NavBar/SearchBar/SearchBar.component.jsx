import React, { useState } from 'react';
import { useDispatch } from '../../../store/StoreProvider';
import { types } from '../../../store/StoreReducer';
import { getVideosByQuery } from '../../../store/dispatchCalls';
import {useHistory} from 'react-router';
import './SearchBar.styles.css';

export default function SearchBar(){
    const history = useHistory();
    const dispatch = useDispatch();
    const [value, setValue] = useState('wizeline');

    const updateValue = e => { setValue(e.target.value)}

    const updateVideos = () => getVideosByQuery(value, dispatch);

    const updateSection = () => dispatch({ type: types.setSectionToMain });

    const onSubmitHandle = e =>{
        e.preventDefault();
        history.push('/');
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