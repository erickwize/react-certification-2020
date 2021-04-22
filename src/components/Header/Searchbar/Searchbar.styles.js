import styled from 'styled-components';
import {motion} from 'framer-motion';

export const Container = styled(motion.div)`
    align-items: center;
    background-color: transparent;
    display: flex;
    width: 100%;
`;

export const InnerContainer = styled(motion.form)`
    align-items: center;
    display: flex;
    margin: auto;
    width: 50%;
`;

export const StyledSearchbar = styled(motion.input)`
    border: 1px solid ${props => props.theme.searchbar.borderColor};
    background-color: ${props => props.theme.searchbar.backgroundColor};
    color: ${props => props.theme.searchbar.color};
    font-size: 18px;
    height: 45px;
    padding-left: 20px;
    width: 100%;

    &:focus{
        outline: none;
        border: 1px solid #b400d2;
    }
`;

export const StyledSvg = styled(motion.svg)`
    cursor: pointer;
    float: left;
    fill: #b400d2;
`;