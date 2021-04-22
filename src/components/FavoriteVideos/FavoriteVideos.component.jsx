import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import { useGlobal } from '../../providers/Global.provider';
import { VideoGridItem } from '../VideosGrid/VideoGridItem/VideoGridItem.component';
import { ProfileCard } from '../ProfileCard/ProfileCard.component';
import { ProfileCardAuth0 } from '../ProfileCardAuth0/ProfileCardAuth0.component';
import { Container, LeftContainer, LogoutContainer, RightContainer, Title, VideosContainer, GlobalStyle } from './FavoriteVideos.styles';

export const FavoriteVideos = ({testData}) => {

    const { isAuthenticated, logout } = useAuth0();
    const { state, dispatch } = useGlobal();
    const data = state.favorites || testData;

    function deAuthenticate(event) {
        event.preventDefault();
        dispatch({type:'logout'});
    }

    return <Container>
        <GlobalStyle theme={state.theme}/>
        <LeftContainer>
            {isAuthenticated?<ProfileCardAuth0/>:<ProfileCard/>}
        </LeftContainer>
        <RightContainer>
            <Title theme={state.theme}>Favorite videos</Title>
            <VideosContainer>
                {
                    data.map(video =>
                        <Link key={video.etag} to={`/favorites/${video.id}`}>
                        <VideoGridItem key={video.etag}
                        video={video} renderedFromFavorites={true}/>
                        </Link>
                    )
                }
            </VideosContainer>
        </RightContainer>
        <LogoutContainer>
            <Link to="/" onClick={deAuthenticate}>
                <button onClick={() => logout({ returnTo: window.location.origin })}>    
                    Logout
                </button>
            </Link>
        </LogoutContainer>
  </Container>;
}