import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
width: 323px;
    height: 400px;
    margin: 10px;
    max-width: 100%;
    display: inline-grid;
    overflow: hidden;
    border: 1px solid #eee;
    max-width: 100%;
    padding: 10px;
`;

const Description = styled.span`
    font-size: .8rem;
    line-height: 1.2rem;
    display: inline-block;
`;

const ContainerImg = styled.div`
   text-align:center;
   height: 180px;
   overflow: hidden;
`;

const Image = styled.img`
    max-width:100%;
    height: 100%;
`;

const Title = styled.h3`
    font-size: 1rem;
    line-height: 1.2rem;
    display: inline-block;
`;

function VideoCard (data) {
    return (
        <Container>
            <ContainerImg>
            <Image alt={data.title} src={data.img} />
            </ContainerImg>
            <Title data-testid="video-title">{data.title}</Title>
            <Description data-testid="video-description">{data.description}</Description>
         
        </Container>
    );

}

export default VideoCard;