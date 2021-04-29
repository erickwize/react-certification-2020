import React from 'react';
import { useGlobal } from '../../providers/Global.provider.jsx';

import { Container } from'./Layout.styles.js';

function Layout({ children }) {

  const { state } = useGlobal();

  return <Container theme={state.theme}>
      {children}
    </Container>;
}

export default Layout;
