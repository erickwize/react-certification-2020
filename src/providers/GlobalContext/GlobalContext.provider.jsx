import { useState, useEffect, createContext, useReducer } from 'react';
import { color } from '../../utils/globalStyle';
import youtubeVideoList from '../../utils/mock/youtube-videos-mock.json';
// import { fetchSearchVideos } from '../../utils/endpoints';

const initalStyle = {
  header: {
    background: color.oceanBlue,
    input: color.lightCoral,
  },
  card: {
    background: color.lightCoral,
    textColor: color.white,
  },
  background: `${color.white}`,
};

export const initalState = {
  search: 'wizeline',
  history: '',
  ...initalStyle,
};

export const GlobalContext = createContext(initalState);

export function useVideoInfo() {
  const [video, setVideo] = useState({});

  function updateVideoInfo(data) {
    setVideo(data);
  }

  return { video, updateVideoInfo };
}

export function reducer(state, action) {
  switch (action.type) {
    case 'SET_HISTORY':
      return {
        ...state,
        history: action.payload,
      };
    case 'SET_LIGHT_MODE':
      return {
        ...state,
        ...initalStyle,
      };
    case 'SET_DARK_MODE':
      return {
        ...state,
        header: {
          background: color.lightCoral,
          input: color.oceanBlue,
        },
        card: {
          background: color.seaTan,
          textColor: color.oceanBlue,
        },
        background: color.oceanBlue,
      };
    case 'SET_SEARCH_KEYWORD':
      return {
        ...state,
        history: state.search,
        search: action.payload,
      };
    case 'SET_VIDEO_LIST':
      return {
        ...state,
        videoList: action.payload,
      };
    default:
      throw new Error('ACTION NOT RECOGNIZED');
  }
}

export function useVideList() {
  const [state, dispatch] = useReducer(reducer, initalState);
  const { search, history } = state;
  const [videoList, setVideoList] = useState([]);
  const [loading, setLoading] = useState(true);

  function updateVideoList(videos) {
    setVideoList(videos);
  }

  function setLoader(isLoading = true) {
    setLoading(isLoading);
  }

  useEffect(() => {
    setLoader(true);
    const getList = async () => {
      let listItems = [];
      dispatch({ type: 'SET_HISTORY', payload: search });
      try {
        listItems = await youtubeVideoList.items;
        // const initalSearch = await fetchSearchVideos(context.search);
        // listItems = initalSearch.items;
      } catch (e) {
        listItems = await youtubeVideoList.items;
        console.info('Error getting inital video search... setting youtubeVideoList');
      }
      updateVideoList(listItems);
      setLoader(false);
    };
    if (search !== history) {
      getList();
    }
  }, [search, history]);

  return { videoList, updateVideoList, loading, setLoader };
}

// style Reducer
export const styleReducer = (state, action) => {
  switch (action) {
    case 'light':
      return initalStyle;
    case 'dark':
      return {
        header: {
          background: color.lightCoral,
          input: color.oceanBlue,
        },
        card: {
          background: color.seaTan,
          textColor: color.oceanBlue,
        },
        background: color.oceanBlue,
      };
    default:
      throw new Error('ACTION NOT RECOGNIZED');
  }
};
