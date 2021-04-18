// import { useState } from 'react';
import { dark, light } from './Themes.styles';
import { storage } from './utils/storage';
export const reducer = (state, action) => {    
    let { theme } = state;

    switch(action.type){
        case 'theme':
            theme.name === 'dark' ? theme = light : theme = dark;
            storage.set('theme', JSON.stringify(theme));
            return {...state, theme };
        case 'search':
            return {...state, search: action.value}
        default:
            return new Error(`Unhandled action ${action.type} in reducer was found`);
    }
};