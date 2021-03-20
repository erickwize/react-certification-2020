import React from 'react';
import styled from 'styled-components';
import VideoCard from '../VideoCard';


const VideosContainer  = styled.div`
    display: flex;
    flex-flow:wrap;
    width: 1300px;
    margin: 0px auto;

`;

function  Videos(props) {
    return (
        <VideosContainer>
            {props.data.items.map((item) => (

                    <VideoCard key={item.etag} data={item.snippet} />
                ))}
        </VideosContainer>

    );
}

export default Videos;