import React from 'react';
import styled from 'styled-components';

const MainDiv = styled.main`
  width: 100vw;
  height: 95vh;
`;

function Layout({ children }) {
  return <MainDiv>{children}</MainDiv>;
}

export default Layout;
