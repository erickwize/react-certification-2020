import React from 'react';
import { useDispatch } from '../../../store/StoreProvider';
import { types } from '../../../store/StoreReducer';

const FavoriteVideo = props => {
    const {id, channel, title, imageUrl, published, description} = props;
    const dispatch = useDispatch();
    
    const updateFavorite = () => {
        dispatch({
            type: types.updateFavorite,
            payload: {
                id,
                title,
                published,
                channel,
                description,
                imageUrl
            }
        })
    }

    return(
        <div onClick={updateFavorite} className="SPFavoriteVideo" key={id}>
            <span className="channel">{channel}</span>
            <span className="title">{title}</span>
            <img src={imageUrl} alt={id} key={id} />
        </div>
    )
}

export default FavoriteVideo;