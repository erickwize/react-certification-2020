import React from 'react';

import './Burger.styles.css';

export const BurgerButton = () => {
  return (
    <button className="btn__burger" type="button">
      <span className="btn__burger__shape">
        <svg className="btn__burger__icon" src=".../../../assets/sprite.svg#icon-menu">
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      </span>
    </button>
  );
};
