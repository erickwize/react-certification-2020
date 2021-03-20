import React from 'react';
import './ToggleSwitch.styles.css';

export default function ToggleSwitch(){
    return(
        <>
            <label className="toggleSwitch">
                <input type="checkbox"/>
                <span className="slider round"></span>
            </label>
            <span className="darkMode">Dark Mode</span>
        </>
    );
}