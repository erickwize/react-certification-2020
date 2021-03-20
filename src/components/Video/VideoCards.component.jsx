import React from 'react';
import styled from 'styled-components';

import {mockVideosData} from '../../mock/youtube-videos-mock';
import VideoCard from './VideoCard.component'



const ContainerVideos = styled.div`
    max-width: 100%;
    margin: 0 5%;
`;

function VideoCards () {

    return (
     <ContainerVideos>   
        {mockVideosData.items
            .filter((a) => (a.id.kind === "youtube#video"))
            .map((data) => {
                return (
                <VideoCard
                    key={data.id.videoId}
                    title={data.snippet.title}
                    description={data.snippet.description}
                    img={data.snippet.thumbnails.medium.url}
                />
                );
            })
        }
    </ContainerVideos>
    );
}

export default VideoCards;