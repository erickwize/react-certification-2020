import React from 'react';
import styled from 'styled-components';
import VideoCard from '../VideoCard';


const VideosContainer  = styled.div`
    display: flex;
    flex-flow:wrap;
    max-width:100%;
    margin: 0px auto;
    justify-content: center;
    margin-left: 20px;
    margin-right:20px;
    padding-left: 12px;
    padding-right: 12px;


    @media only screen and (max-width: 600px) {

        justify-content:center;
    }
`;




const  VideoList =(props) => {


    return (
        <VideosContainer>

            {props.data.map((item) => (

                        <VideoCard  key={item.etag} snippet={item.snippet} id={item.id} setShowDetail={props.setShowDetail}/>
                ))}

        </VideosContainer>

    );
}

export default VideoList;