import React from 'react';

import { SpanIcon, SvgIcon } from './Icons.styled';
import { MenuIcons } from './MenuIcons';

const Icon = ({ viewBox, icon, color }) => {
  const { d } = MenuIcons[icon];
  return (
    <>
      <SpanIcon>
        <SvgIcon
          title="FavoriteButton"
          xmlns="http://www.w3.org/2000/svg"
          viewBox={viewBox}
          focusable="false"
        >
          <path style={{ fill: { color } }} d={d} />
        </SvgIcon>
      </SpanIcon>
    </>
  );
};

export default Icon;
