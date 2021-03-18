import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #191919;
    color: #aaaaaa;
    margin-right: 1.5rem;
    margin-bottom: 2rem;
    font-size: 1.4rem;
`;

const Image = styled.img`
    width: 100%;
    height: 15rem;
    object-fit: cover;
`;

const Title = styled.h3`
    color: white;
    padding-bottom: 0.4rem;
`;

const InfoContainer = styled.div`
    padding: 1rem;
`;

const Subtitle = styled.h4`
    font-weight: normal;
`;

const Description = styled.p`
    margin-top: 0.8rem;
`;

const Cards = ({ img, title, channel, description, date }) => {

    return(
        <>
            <Card>
                <Image src={img} alt={title}/>
                <InfoContainer>
                    <Title>{title}</Title>
                    <Subtitle>By {channel} • {date.split('T')[0]}</Subtitle> 
                    <Description>{description}</Description>
                </InfoContainer>
            </Card>
        </>
    );
}

export default Cards;