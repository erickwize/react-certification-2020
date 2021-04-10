export const GLOBAL_ACTIONS = {
  GET_VIDEOS_REQUEST: 'GET_VIDEOS_REQUEST',
  GET_VIDEOS_SUCCESS: 'GET_VIDEOS_SUCCESS',
  GET_VIDEOS_FAILURE: 'GET_VIDEOS_FAILURE',
  SWITCH_THEME: 'SWITCH_THEME',
};

export const switchTheme = (dispatch, themeValue) => {
  dispatch({
    type: 'SWITCH_THEME',
    payload: themeValue,
  });
};

// const fetchData = useCallback(async () => {
//   setLoading(true);
//   if (fetching) {
//     try {
//       // const response = await fetch(
//       //   `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${param}&type=video&key=${process.env.REACT_APP_API_KEY}`,
//       //   {
//       //     method: 'get',
//       //     headers: { 'Content-Type': 'application/json' },
//       //   }
//       // );
//       // const data = await response.json();
//       const data = mockVideos;
//       console.log('FETCHING');
//       setVideoList(data);
//     } catch (err) {
//       setError(true);
//     }
//   }

//   setLoading(false);
// }, [param, fetching]);
