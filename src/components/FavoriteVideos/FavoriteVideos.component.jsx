import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobal } from '../../providers/Global.provider';
import { VideoGridItem } from '../VideosGrid/VideoGridItem/VideoGridItem.component';
import { ProfileCard } from '../ProfileCard/ProfileCard.component';
import { Container, LeftContainer, RightContainer, Title, VideosContainer, GlobalStyle } from './FavoriteVideos.styles';

export const FavoriteVideos = () => {

    const { state } = useGlobal();
    const data = state.favorites;

    return <Container>
        <GlobalStyle theme={state.theme}/>
        <LeftContainer>
            <ProfileCard/>
        </LeftContainer>
        <RightContainer>
            <Title theme={state.theme}>Favorite videos</Title>
            <VideosContainer>
                {
                    data.map(video =>
                        <Link key={video.etag} to={`/favorites/${video.id}`}>
                        <VideoGridItem key={video.etag}
                        video={video}/>
                        </Link>
                    )
                }
            </VideosContainer>
        </RightContainer>
  </Container>;
}