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
    border: 1px solid #b3b3b3;
    height: 32px;
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