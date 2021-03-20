import React from 'react';
import styled from 'styled-components';

const CardContent = styled.div`
    overflow: hidden;
    border-radius: 2px;
    border: 1px solid rgb(236, 236, 236 ) !important;
    display:block;
    width:350px;
    height: 350px;
    margin:15px;
`;

const Preview = styled.div`
    display: block;
    height: 180px;
`;

const Details = styled.div`
    display: block;
    padding 15px;
`;

const Thumbnail = styled.img`
width: 350px;
height: 180px;
`;



function VideoCard(props){
    return (
        <CardContent>
            <Preview >
                <Thumbnail alt="default" src={props.data.thumbnails.high.url} />
            </Preview>
            <Details>
                <h3>{props.data.title}</h3>
                <p>{props.data.description}</p>
            </Details>
        </CardContent>

    );
}

export default VideoCard;
