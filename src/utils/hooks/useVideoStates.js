import { useState, useEffect } from 'react';
import youtubeVideoList from '../mock/youtube-videos-mock.json';

export function useVideList() {
  console.log('called useVideList sa...');
  const [videoList, setVideoList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getList = async () => {
      let listItems = [];

      try {
        listItems = await youtubeVideoList.items;
      } catch (e) {
        console.info('Error reading json file: youtubeVideoList');
        setError(e);
      }
      setVideoList(listItems);
    };
    getList();
  }, []);

  function updateVideoList(videos) {
    setVideoList(videos);
  }

  function setErrorMsg(errorMsg) {
    setError(errorMsg);
  }

  return { videoList, error, setErrorMsg, updateVideoList };
}

export function useVideoInfo() {
  const [video, setVideo] = useState({});

  function updateVideoInfo(data) {
    setVideo(data);
  }

  return { video, updateVideoInfo };
}
