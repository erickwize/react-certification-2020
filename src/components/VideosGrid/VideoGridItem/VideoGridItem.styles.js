import styled from 'styled-components';
import {motion} from 'framer-motion';

export const CardContainer = styled(motion.div)`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    margin: 10px;
    max-width: 340px;
    min-width: 340px;
    max-height: 280px;
    min-height: 280px;
    text-align: left;
`;

export const VideoThumbnail = styled.img`
    max-height: 180px;
    object-fit: cover;
`;

export const VideoInfo = styled.div`
    background-color: transparent;
`;

export const VideoTitle = styled.p`
    font-size: 20px;
    font-weight: bold;
    line-height: 20px;
    margin: 10px 0 0 0px;
    min-height: 40px;
    max-height: 40px;
    overflow: hidden;
`;

export const VideoThumbnailInfo = styled.p`
    color: #919191;
    margin: 10px 0 0 0px;
`;