import React from 'react';

import './Toggle.styles.css';

function Toggle() {
  return (
    <div className="toggle">
      <label className="switch" htmlFor="switch-theme">
        <input type="checkbox" name="switch-theme" />
        <span className="slider round" />
      </label>
    </div>
  );
}

export default Toggle;
