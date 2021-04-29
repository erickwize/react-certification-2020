import React from 'react';
import imagen from './tube.png';
import './LogoText.styles.css';
import { useHistory } from 'react-router';

export default function LogoText(){
    const history = useHistory();

    const goToHome = () => {
        history.push('/');
    }

    return(
        <span onClick={goToHome} className="logoBox">
            <h3>Wize</h3>
            <img src={imagen} alt="imagen"/>
        </span>
    );
}