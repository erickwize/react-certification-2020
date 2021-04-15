import React, { useContext } from 'react';
import { GlobalContext } from '../../providers/GlobalContext';

import './Layout.styles.css';

function Layout({ children }) {
  const { background } = useContext(GlobalContext);
  return (
    <main className="container" style={{ background }}>
      {children}
    </main>
  );
}

export default Layout;
