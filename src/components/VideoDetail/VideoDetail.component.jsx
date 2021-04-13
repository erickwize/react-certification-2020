import React from 'react';
import styled from 'styled-components';
import VideoCard from '../VideoCard';


const VideosContainer  = styled.div`
    width: 30%;
    height:100%;
    overflow:scroll;

`;

function VideoDetail(props){
    console.log(props)
    return (
        <div className="Video-Detail">
            <div className="Main-Video">
                <iframe
                    src={`https://www.youtube.com/embed/${props.videoid.id}`}
                    frameBorder="0"
                    height="500px"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
                <h4>{props.videoid.title}</h4>
                <p>{props.videoid.description}</p>
            </div>
            <VideosContainer className="Video-List">
                {props.data.map((item) => (
                    <VideoCard className="Video-Card" key={item.etag} snippet={item.snippet} id={item.id} setShowDetail={props.videoid.setShowDetail}/>
                ))}
            </VideosContainer>
        </div>


    );
}




export default VideoDetail;