import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
`;

export const LeftContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    width: 15%;

    @media(min-width: 280px) and (max-width:1024px){
        width: 90%;
    }
`;

export const RightContainer = styled.div`
    width: 80%;

    @media(min-width: 280px) and (max-width:1024px){
        width: 100%;
    }
`;

export const VideosContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
`;

export const Title = styled.h1`
    color: ${props => props.theme.favoritesView.titleColor};
    display: flex;
    justify-content: center;
    margin: -10px 0 10px 0;
    width: 100%;
`;

export const GlobalStyle = createGlobalStyle`
    body{
        background-color: ${props => props.theme.body.backgroundColor};
    }
`;