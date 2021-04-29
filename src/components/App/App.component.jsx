import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routes from '../Routes';
import Layout from '../Layout';
import { Header } from '../index';
import GlobalStyle from '../../GlobalStyle';
import { lightTheme, darkTheme } from '../../utils/themes';
import { useGlobalProvider } from '../../store/global/global.provider';

function App() {
  const {
    state: { themeValue },
  } = useGlobalProvider();
  const themeMode = themeValue === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <BrowserRouter>
        <Layout>
          <Header />
          <Routes />
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
