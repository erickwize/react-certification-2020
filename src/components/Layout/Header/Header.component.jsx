import React from 'react';

import { BurgerButton } from '../../Buttons';
import { SearchBar } from '../../Utils';

import './Header.styles.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <BurgerButton />
        <SearchBar />
        <div className="flex__grow" />
        <div className="header__right">
          <label className="header__theme" htmlFor="theme">
            <span className="header__theme__switch">
              <span className="header__theme__switch__inner">
                <span className="header__theme__switch__input">
                  <input
                    className="header__theme__switch__input__cb"
                    type="checkbox"
                    name="theme"
                  />
                  <span className="header__theme__switch__input__ball" />
                </span>
              </span>
              <span className="header__theme__switch__track" />
            </span>
            <span className="header__theme__title">Dark mode</span>
          </label>
          <button className="header__profile" type="button">
            <span className="header__profile__outer">
              <div className="header__profile__circle">
                <svg className="header__profile__icon">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
