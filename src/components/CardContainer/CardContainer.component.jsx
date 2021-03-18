import React, {useEffect, useState} from 'react';
import videos from './youtube-videos-mock.json';
import Cards from '../Cards/Cards.component';
import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); 
    padding-left: 1.5rem;
    padding-top: 1.5rem;
`;

const CardContainer = () => {
    const [videoList, setVideoList] = useState('');

    useEffect(() => {
        setVideoList(videos.items);
    }, [])

    return(
        <Container>
            {videoList.length > 0 && videoList.map((video) => <Cards key={video.etag} img={video.snippet.thumbnails.medium.url} title={video.snippet.title} channel={video.snippet.channelTitle} description={video.snippet.description} date={video.snippet.publishedAt}/>)}
        </Container>
    );
}

export default CardContainer;