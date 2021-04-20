import React from 'react';
import { Link } from 'react-router-dom';
import { RelatedVideosItem } from '../../VideoDetail/RelatedVideos/RelatedVideosItem/RelatedVideosItem.component';
import styled from 'styled-components';
import { useGlobal } from '../../../providers/Global.provider';

const Container = styled.div`
    padding 0px 20px 0px 20px;

    a{
        color:black;
    }

    @media(max-width: 1024px){
        padding:0;
    }
`;

export const FavoriteVideosPlaylist = () => {
    
    const { favorites } = useGlobal().state;
    console.log(favorites);

    return <Container data-testid="related-videos">
        {   
            favorites!==null && favorites.length>0 &&
            favorites.map(video =>                
            <Link key={video.id} to={`/favorites/${video.id}`}>
                <RelatedVideosItem 
                    key={video.id} 
                    video={video}/>
            </Link>
            )
        }
    </Container>
}