import React from 'react';
import { useParams } from 'react-router-dom';
import { VideoFrame }from '../VideoDetail/VideoFrame/VideoFrame.component';
import { VideoInfo }from '../VideoDetail/VideoInfo/VideoInfo.component';
import { FavoriteVideosPlaylist } from './FavoriteVideosPlaylist/FavoriteVideosPlaylist.component'
import { Container, Subcontainer, LeftContainer, RightContainer} from '../../components/VideoDetail/VideoDetail.styles';
import { useFetchVideoInfo } from '../../utils/hooks/useFetchVideoInfo';

export const FavoriteVideoDetail = () => {
    const { videoId } = useParams();
    const { videos } = useFetchVideoInfo(videoId);
    const video = videos.items[0];

    return <Container data-testid="video-detail">
        <Subcontainer>
            <LeftContainer>
                <VideoFrame videoId={videoId}></VideoFrame>
                {video && <VideoInfo video={video}></VideoInfo>}
            </LeftContainer>
            <RightContainer>
                <FavoriteVideosPlaylist/>
            </RightContainer>
        </Subcontainer>
    </Container>
}