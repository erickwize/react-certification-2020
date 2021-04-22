import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { GlobalContext } from '../../providers/GlobalContext';

import { VideoList, HomeTitle } from './Favs.styles';
import VideoCard from '../../components/VideoCard';

function UserFavorites({ selectCard, dispatch }) {
  const { favoritesList } = useContext(GlobalContext);
  const videoList = Object.values(favoritesList);
  const history = useHistory();

  const cardClick = (video) => {
    history.push(`/player/${video.videoId}`);
    selectCard(video);
  };

  return (
    <section data-testid="yt-videocards">
      <HomeTitle>User</HomeTitle>
      <p>Cuentas con {videoList.length} videos guardados</p>
      <VideoList>
        {videoList.map((video) => (
          <VideoCard
            key={video.videoId}
            videoData={video}
            cardClick={cardClick}
            dispatch={dispatch}
          />
        ))}
      </VideoList>
    </section>
  );
}

export default UserFavorites;
