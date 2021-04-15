import React, { useState } from 'react';
import { parseDatetime } from '../../../utils/parseDatetime';
import {Title, ChannelAndDatePublished, Separator, DescriptionContainer, DescriptionText, ShowLessMore } from './VideoInfo.styles';
import { useGlobal } from '../../../providers/Global.provider';

const variants = {
    open: {height: "auto"},
    closed: {height: 50}
}

export const VideoInfo = ({video}) => {
    const [isOpen, setIsOpen] = useState(false);
    const {title, channelTitle, publishedAt, description} = video.snippet;
    const { state } = useGlobal();

    return <div data-testid="video-info">
        <Title theme={state.theme}>{title}</Title>
        <ChannelAndDatePublished theme={state.theme}>{`${channelTitle} • ${parseDatetime(publishedAt)}`}</ChannelAndDatePublished>
        <Separator theme={state.theme}></Separator>
        <DescriptionContainer animate={isOpen ? "open":"closed"} variants={variants}>
            <DescriptionText theme={state.theme}>{description}</DescriptionText>
        </DescriptionContainer>
        <ShowLessMore theme={state.theme} data-testid="info-toggle" onClick={()=>setIsOpen(!isOpen)}>Show {!isOpen && 'more'}{isOpen && 'less'}</ShowLessMore>
    </div>
}