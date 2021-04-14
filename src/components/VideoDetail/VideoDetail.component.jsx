import React, { useContext } from 'react';
// import VideoList from '../VideoList';
import VideoPlayer from '../VideoPlayer';
import { Wrapper } from './VideoDetail.styled';
// import { useFetch } from '../../hooks/useFetch';
import { GlobalContext } from '../../context/GlobalContext';

function VideoDetail() {
  const globalContext = useContext(GlobalContext);
  // globalContext.video.setRelatedHandler(response);
  // const { url } = useFetch(globalContext.video.currVid);
  // console.log('VideoDetail:url', url);
  // console.log(globalContext.video.related);
  return (
    <Wrapper>
      {globalContext.video.currVid && (
        <>
          <VideoPlayer />
          <div>
            <h3>Related videos</h3>
            {/* {globalContext.video.related && (
              <VideoList items={globalContext.video.related} />
            )} */}
          </div>
        </>
      )}
    </Wrapper>
  );
}

export default VideoDetail;
