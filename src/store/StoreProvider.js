import React from 'react';
import {createContext, useContext, useReducer, useEffect } from 'react';
import storeReducer, { initialStore, types } from './StoreReducer';

const  StoreContext = createContext();

const StoreProvider = ({children}) => {
    const [store, dispatch] = useReducer(storeReducer, initialStore);
    useEffect(() => {
        const data = localStorage.getItem('favorite-videos');
        if(data){
            dispatch({
                type: types.setFromLocalStorage,
                payload: JSON.parse(data)
            })
            dispatch({
                type: types.updateFavorite,
                payload: JSON.parse(data)[ JSON.parse(data).length - 1]
            })
        }
    },[])
    useEffect(() => {
        localStorage.setItem('favorite-videos', JSON.stringify(store.favoriteVideos));
    })
    return(
        <StoreContext.Provider value={[store, dispatch]}>
            {children}
        </StoreContext.Provider>
    )
}

const useStore = () => useContext(StoreContext)[0];
const useDispatch = () => useContext(StoreContext)[1];

export { StoreContext, useStore, useDispatch }; 
export default StoreProvider;