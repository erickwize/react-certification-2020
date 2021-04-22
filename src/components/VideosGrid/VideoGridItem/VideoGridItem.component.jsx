import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { CardContainer, VideoThumbnail, AddToFavoritesButton, VideoInfo, VideoTitle, VideoThumbnailInfo } from './VideoGridItem.styles';
import { parseDatetime } from '../../../utils/parseDatetime';
import { useGlobal } from '../../../providers/Global.provider';
import { FavoriteSVG } from '../../../svg/Favorite';

export const VideoGridItem = ({video, renderedFromFavorites}) => {

  const { state, dispatch } = useGlobal();
  const { isAuthenticated } = useAuth0();
  const [isFav, setIsFav] = useState(false);

  const handleClick = () =>{
      if(!isFav) dispatch({type:'addFavorite', value: video});
      else dispatch({type:'removeFavorite', value: video})
  }

  useEffect(()=>{
      const exists = state.favorites.filter(item=>item.id === video.id.videoId).length > 0;
      setIsFav(exists);
  }, [state,video]);

  return <Link key={video.etag} to={`/video/${video.id.videoId}`}>
    <CardContainer whileTap={{scale:0.9}} whileHover={{scale:1.05}} onClick={()=>dispatch({type:'closeMenu'})}>
        <VideoThumbnail alt="thumbnail" src={video.snippet.thumbnails.high.url}/>
        <VideoInfo>
            <VideoTitle>{video.snippet.title}</VideoTitle>
            <VideoThumbnailInfo>{`${video.snippet.channelTitle} • ${parseDatetime(video.snippet.publishedAt)}`}</VideoThumbnailInfo>
        </VideoInfo>
        { (state.user.authenticated || isAuthenticated ) &&
            <AddToFavoritesButton theme={state.theme} title="Add to favorites" whileTap={{scale:1.5}} onClick={handleClick}>
                {!renderedFromFavorites && <FavoriteSVG filled={isFav}/>}
            </AddToFavoritesButton>
        }
    </CardContainer>
  </Link>
}