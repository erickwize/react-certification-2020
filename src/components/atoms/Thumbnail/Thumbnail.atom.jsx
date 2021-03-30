import React from 'react';

import { ThumbnailImg } from './Thumbnail.styles.js';

const Thumbnail = ({ bg = null }) => {
  return <ThumbnailImg>{bg}</ThumbnailImg>;
};

export default Thumbnail;
