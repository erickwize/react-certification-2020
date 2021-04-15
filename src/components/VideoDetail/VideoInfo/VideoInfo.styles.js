import styled from 'styled-components';
import {motion} from 'framer-motion';

export const Title = styled.p`
    font-size: 32px;
    margin: 10px 0px 0px 0px;
    color: ${props => props.theme.videoDetail.color};
`;

export const ChannelAndDatePublished = styled.p`
    font-size: 12px;
    margin: 0px 0px 0px 0px;
    color: ${props => props.theme.videoDetail.colorDate};
`;

export const Separator = styled.div`
    border: 1px solid ${props => props.theme.videoDetail.colorSeparator};
    margin: 10px 0px 0px 0px;
    width:100%;
`;

export const DescriptionContainer = styled(motion.div)`
    overflow: hidden;
    min-height: 50px;
`;

export const DescriptionText = styled.p`
    text-align: justify;
    font-size: 12px;
    margin: 10px 0px 0px 0px;
    color: ${props => props.theme.videoDetail.colorDescription};
`;

export const ShowLessMore = styled.button`
    background: ${props => props.theme.videoDetail.descButton.backgroundColor};
    border: none;
    border-radius: 2px;
    color: ${props => props.theme.videoDetail.descButton.color};
    cursor: pointer;
    font-size: 16px;
    outline: none;
    width: 100%;
    height: 50px;
`;