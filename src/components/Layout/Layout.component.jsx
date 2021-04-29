import React, { useContext } from 'react';
import { Container } from './Layout.styled';
import { GlobalContext } from '../../context/GlobalContext';

function Layout({ children }) {
  const globalContext = useContext(GlobalContext);
  return (
    <Container className="container" theme={globalContext.colors}>
      {children}
    </Container>
  );
}

export default Layout;
