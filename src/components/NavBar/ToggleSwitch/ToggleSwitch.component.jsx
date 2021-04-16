import React from 'react';
import './ToggleSwitch.styles.css';
import { useDispatch, useStore } from '../../../store/StoreProvider';
import { types } from '../../../store/StoreReducer';

export default function ToggleSwitch(){
    const store = useStore();
    const dispatch = useDispatch();

    function saludar(e){
        console.log(store);
        if(store.theme === "light"){
            dispatch({type: types.setThemeDark});
        }else{
            dispatch({type: types.setThemeLight});
        }
        
        document.body.style.backgroundColor = store.theme === "light"?"black":"#cec7bd";
        

    }
    return(
        <>
            <label className="toggleSwitch">
                <input onChange={saludar} type="checkbox"/>
                <span className="slider round"></span>
            </label>
            <span className="darkMode">Dark Mode</span>
        </>
    );
}