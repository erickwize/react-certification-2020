import React from 'react';
import '../BurgerMenu/BurgerMenu.styles.css';
import {useStore, useDispatch} from '../../../store/StoreProvider';
import { useAuth } from '../../../providers/Auth';
import {types} from '../../../store/StoreReducer';
import {useHistory} from 'react-router';

export default function BurguerMenu(){
	const { authenticated, logout} = useAuth();
	const {sideBarEnabled} = useStore();
	const dispatch = useDispatch();
	const history = useHistory();

	const logoutOfApp = () => {
		logout();
		history.push('/');
	}

	const gotoLogin = () => {
        if(!authenticated){
            history.push('/login');
        }else{
            logout();
        }
    }

	const gotoFavorites = () => {
        if(authenticated){
            history.push('/secret');
        }
    }

	const setSideBar = () => dispatch({ type: types.setSideBar });

    return(
        <div onClick={setSideBar} data-testid="burger" className={`burgerMenu ${sideBarEnabled?"xForm":null}`}>
			<div className="line line1"></div>
			<div className="line line2"></div>
			<div className="line line3"></div>
			<div className={`sideBar ${sideBarEnabled?null:"hiddenSideBar"}`}>
				{
					authenticated
					? 
					<div>
						<span onClick={gotoFavorites}>Favorite Videos</span>
						<span onClick={logoutOfApp}>Logout</span>
					</div>
					: 
					<div>
						<span onClick={gotoLogin}>Login</span>
					</div>
				}
			</div>
		</div>
    );
}