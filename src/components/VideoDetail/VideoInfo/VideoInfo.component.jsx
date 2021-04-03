import React, { useState } from 'react';
import { parseDatetime } from '../../../utils/parseDatetime';
import {Title, ChannelAndDatePublished, Separator, DescriptionContainer, DescriptionText, ShowLessMore } from './VideoInfo.styles';
// const mockVideoData = require('../../../mock-data/youtube-video-api.json').items[0];

const variants = {
    open: {height: "auto"},
    closed: {height: 50}
}

export const VideoInfo = ({video}) => {
    const [isOpen, setIsOpen] = useState(false);
    if(video){
        const {title, channelTitle, publishedAt, description} = video.snippet;

        return <div>
            <Title>{title}</Title>
            <ChannelAndDatePublished>{`${channelTitle} • ${parseDatetime(publishedAt)}`}</ChannelAndDatePublished>
            <Separator></Separator>
            <DescriptionContainer animate={isOpen ? "open":"closed"} variants={variants}>
                <DescriptionText>{description}</DescriptionText>
            </DescriptionContainer>
            <ShowLessMore onClick={()=>setIsOpen(!isOpen)}>Show {!isOpen && 'more'} {isOpen && 'less'}</ShowLessMore>
        </div>
    }
    return <></>
}