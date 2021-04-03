import { useState, useEffect } from 'react';
import { ytapikey } from '../utils/config';

export const useFetch = (videoId) => {
  // if (typeof videoId.id !== 'undefined' && videoId !== '') {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId.id.videoId}&type=video&maxResults=5&key=${ytapikey}`;
  // }
  const [state, setState] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((x) => x.text())
      .then((y) => {
        setState(y);
        console.log(state);
      });
  }, [url, state]);

  return { url, state };
};
