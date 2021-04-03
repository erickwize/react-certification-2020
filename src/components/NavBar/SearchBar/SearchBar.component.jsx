import React, { useContext, useState } from 'react';
import { VideoContext } from '../../../providers/Videos/VideoContext';
import { SectionContext } from '../../../providers/Section/SectionContext';
import './SearchBar.styles.css';

export default function SearchBar(){
    const [value, setValue] = useState('wizeline');
    const [section, setSection] = useContext(SectionContext);
    const [, setVideos] = useContext(VideoContext);

    const updateValue = e => { setValue(e.target.value)}

    function updateVideos (){
        fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCGgacaXWGPF-AGRR2HVyIccNQGk92O9oo&type=video&part=snippet&maxResults=10&q=${value}`)
        .then(resp => resp.json())
        .then(response => {
            setVideos(() => response.items)
        })
        .catch(error => console.log(error))
    }

    const updateSection = () => {
        setSection({main: true, videoId: ""});
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