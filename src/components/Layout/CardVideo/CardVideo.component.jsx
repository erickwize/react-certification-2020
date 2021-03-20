import React from 'react';
import styled from 'styled-components';


const CardContainer = styled.div`
    width: 350px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 10px;
    overflow: hidden;
    padding: 15px;
`;

const CardImg = styled.img`
    width: 100%;
    height: 140px;
`;


function CardVideo(props){
    return(
        <CardContainer>
            <CardImg src={props.item.item.snippet.thumbnails.high.url}/>
            <div>
                <h4>{props.item.item.snippet.title.toString()}</h4>
                <p>{props.item.item.snippet.description}</p>
            </div>
        </CardContainer>
    );
}


export default CardVideo;