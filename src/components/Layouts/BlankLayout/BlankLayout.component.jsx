import React from 'react';

import './BlankLayout.styles.css';

function BlankLayout({ children }) {
  return (
    <div className="container">
      <div className="card">
        <div className="content-body">{children}</div>
      </div>
    </div>
  );
}

export default BlankLayout;
