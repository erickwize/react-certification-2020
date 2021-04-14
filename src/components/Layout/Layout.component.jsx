import React, { useContext } from 'react';
import { StyleContext } from '../../utils/hooks/useContext';

import './Layout.styles.css';

function Layout({ children }) {
  const { background } = useContext(StyleContext);
  return (
    <main className="container" style={{ background }}>
      {children}
    </main>
  );
}

export default Layout;
