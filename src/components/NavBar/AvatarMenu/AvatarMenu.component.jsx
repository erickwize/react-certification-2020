import React from 'react';
import './AvatarMenu.styles.css';
import {useHistory} from 'react-router';
import {useAuth} from '../../../providers/Auth';
import {mockedUser} from '../../../pages/Login/api';
import avatarImagen from './avatar.jpg';

export default function AvatarMenu(){
    const { authenticated, logout } = useAuth();
    const history = useHistory();

    const gotoLogin = () => {
        if(!authenticated){
            history.push('/login');
        }else{
            logout();
        }
    }
    return(
        <div onClick={gotoLogin}>
            {
                <img src={authenticated?mockedUser.avatarUrl:avatarImagen} alt={mockedUser.id} className="avatarMenu"/> 
            }
        </div>
        
    );
}