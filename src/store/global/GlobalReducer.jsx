import { GLOBAL_ACTIONS } from './GlobalAction';

const localTheme = window.localStorage.getItem('theme');

export const initialState = {
  fetchingVideo: false,
  videoList: [],
  error: false,
  search_value: 'Wizeline',
  themeValue: localTheme || 'light',
};

export function globalReducer(state, action) {
  switch (action.type) {
    case GLOBAL_ACTIONS.SWITCH_THEME: {
      return { ...state, themeValue: action.payload };
    }

    case GLOBAL_ACTIONS.GET_VIDEOS_REQUEST: {
      return { ...state, fetchingVideo: true, search_value: action.payload };
    }
    case GLOBAL_ACTIONS.GET_VIDEOS_SUCCESS: {
      return { ...state, fetchingVideo: false, videoList: action.payload };
    }
    case GLOBAL_ACTIONS.GET_VIDEOS_FAILURE: {
      return { ...state, fetchingVideo: false, error: true };
    }
    default:
      throw new Error('Unkown action');
  }
}
