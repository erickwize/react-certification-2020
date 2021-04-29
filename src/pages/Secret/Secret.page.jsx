import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/Navbar';
import { mockedUser } from '../../pages/Login/api';
import { useStore } from '../../store/StoreProvider';
import Moment from 'react-moment';
import FavoriteVideo from './FavoriteVideo/FavoriteVideo.component';
import './secret.styles.css';

function SecretPage() {
  const { favoriteVideos, currentFav, theme} = useStore();
  const url = `https://www.youtube.com/embed/${favoriteVideos[favoriteVideos.length - 1].id}`;
  const {title, published, channel, description } = currentFav;


  return (
    <section>
      <NavBar />
      <div className={`SecretPageSection ${theme === "light"?null:"secretDark"}`}>
        <pre className="SPWelcomeSign">
          Welcome {mockedUser.name}!!! {favoriteVideos[0].id!=="" ? "These are your favorite videos!!!" : "There are no favorite videos added to the list"}
          <Link to="/"> ← go back</Link>
        </pre>
        {
          favoriteVideos[0].id!=="" ?
            <div className="SPCurrentVideo">
              <iframe
                title={favoriteVideos[favoriteVideos.length - 1].id}
                className="videoFrame"
                width="420"
                height="315"
                src={url}
                frameBorder="0"
                allowFullScreen
              >
              </iframe>
              <div className="SPVideoDetails">
                <span className="title">{title}</span>
                <Moment className={`published}`} fromNow>{`${published.slice(0,16)}-0000`}</Moment>
                <span className="channel">{channel}</span>
                <span className="description">{description}</span>
              </div>
            </div> : null
        }
        <div className="SPFavoriteVideos">
          {
            favoriteVideos
              .filter(video => video.id !== favoriteVideos[favoriteVideos.length - 1].id)
              .map(video =>
                <FavoriteVideo
                  id={video.id}
                  channel={video.channel}
                  title={video.title}
                  imageUrl={video.imageUrl}
                  key={video.id}
                  published={video.published}
                  description={video.description}
                />
              )
          }
        </div>
      </div>
    </section>
  );
}

export default SecretPage;
