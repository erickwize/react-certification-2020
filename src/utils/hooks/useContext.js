import { createContext } from 'react';
import { color } from '../globalStyle';

export const initalState = {
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

export const StyleContext = createContext(initalState);

export const VideoListContext = createContext([]);

// style Reducer
export const reducer = (state, action) => {
  switch (action) {
    case 'light':
      return initalState;
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
      throw new Error();
  }
};
