import React from 'react';
import imagen from './tube.png';
import './LogoText.styles.css';

export default function LogoText(){
    return(
        <span className="logoBox">
            <h3>Wize</h3>
            <img src={imagen} alt="imagen"/>
        </span>
    );
}