import React from 'react';
import { useParams } from 'react-router';
import { VideoFrame }from './VideoFrame/VideoFrame.component';
import { VideoInfo }from './VideoInfo/VideoInfo.component';
import { RelatedVideos }from './RelatedVideos/RelatedVideos.component';
import { Container, Subcontainer, LeftContainer, RightContainer} from './VideoDetail.styles';
import { useFetchVideoInfo } from '../../utils/hooks/useFetchVideoInfo';

export const VideoDetail = () => {
    const { videoId } = useParams();
    const { videos} = useFetchVideoInfo(videoId);
    const video = videos.items[0];

    return <Container>
        <Subcontainer>
            <LeftContainer>
                <VideoFrame videoId={videoId}></VideoFrame>
                <VideoInfo video={video}></VideoInfo>
            </LeftContainer>
            <RightContainer>
                <RelatedVideos videoId={videoId}></RelatedVideos>
            </RightContainer>
        </Subcontainer>
    </Container>
}