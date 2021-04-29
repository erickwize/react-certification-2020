import React from 'react';
import BurgerMenu from './BurgerMenu/BurgerMenu.component';
import SearchBar from './SearchBar/SearchBar.component';
import LogoText from './LogoText/LogoText.component';
import ToggleSwitch from './ToggleSwitch/ToggleSwitch.component';
import AvatarMenu from './AvatarMenu/AvatarMenu.component';

import './NavBar.styles.css';

export default function NavBar(){
    return(
        <nav className="NavBar">
            <BurgerMenu/>
            <SearchBar/>
            <LogoText/>
            <ToggleSwitch/>
            <AvatarMenu/>
        </nav>
    );
}