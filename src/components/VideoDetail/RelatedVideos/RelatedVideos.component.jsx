import React from 'react';
import { Link } from 'react-router-dom';
import { RelatedVideosItem } from './RelatedVideosItem/RelatedVideosItem.component';
import styled from 'styled-components';
import { useFetchRelatedVideos } from '../../../utils/hooks/useFetchRelatedVideos';

const Container = styled.div`
    padding 0px 20px 0px 20px;

    a{
        color:black;
    }
`;

export const RelatedVideos = ({videoId}) => {

    const { videos} = useFetchRelatedVideos(videoId);

    return <Container data-testid="related-videos">
        {   
            videos!==null && videos.items.length>0 &&
            videos.items.map(video =>                
            <Link key={video.id.videoId} to={`/video/${video.id.videoId}`}>
                <RelatedVideosItem 
                    key={video.id.videoId} 
                    video={video}/>
            </Link>
            )
        }
    </Container>
}