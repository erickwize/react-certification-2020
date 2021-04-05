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

    &:hover{
        background-color: rgb(227 227 227);
    }

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

    @media only screen and (max-width: 600px) {
        width:30%;
    }
`;

const VideoButton = styled.button`
    background: none;
    width: 100%;
    display: block;
    padding:0;
    margin:0;
    align-items:center;
    border:0;
    cursor:pointer;
    user-select:none;
    outline:none;
    text-align:left;

`



const VideoCard =(props) =>{

    const showDetail=(e)=>{
        e.preventDefault();
        props.setShowDetail({id:props.id.videoId,
            title:props.snippet.title,
            description:props.snippet.description, setShowDetail:props.setShowDetail})
    }

    return (
        <CardContent className="Video-Card" >
            <VideoButton type="button"  onClick={showDetail} >
                <Preview >
                    <Thumbnail alt="default" src={props.snippet.thumbnails.high.url} />
                </Preview>
                <Details>
                    <h3>{props.snippet.title}</h3>
                    <p>{props.snippet.description}</p>
                </Details>
            </VideoButton>
        </CardContent>

    );
}

export default VideoCard;
