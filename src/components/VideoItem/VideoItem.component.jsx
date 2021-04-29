import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Wrapper, Title, Thumbnail, Text } from './VideoItem.styled';
import { GlobalContext } from '../../context/GlobalContext';

function VideoItem({ item, related, favorite, showDesc }) {
  // console.log('VideoItem:related', related);
  const history = useHistory();
  const globalContext = useContext(GlobalContext);
  const text = item.snippet.title.replace(/&#39;/g, "'");
  const onClickHandler = () => {
    // console.log('VideoItem:onClickHandler', item, 'Favorite:', favorite);
    globalContext.setVidObject(item);
    globalContext.setVidId(item.id.videoId);
    if (!favorite) {
      history.push('/detail');
    } else {
      history.push('/favoritedetail');
    }
  };
  return (
    <Wrapper onClick={onClickHandler} related={related}>
      <Thumbnail src={item.snippet.thumbnails.high.url} theme={globalContext.colors} />
      <Title theme={globalContext.colors}>{text}</Title>
      {showDesc && <Text>{item.snippet.description}</Text>}
    </Wrapper>
  );
}

export default VideoItem;
